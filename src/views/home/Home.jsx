import { Fragment, useState } from 'react';
import { Container } from '../../theme/Styles';
import { FiltersCard, HomeContainer, SectionTitle, StyledFilterButton, Loading, CardItem, Divider, CardPostedText, CardPostedTitle, CardItemHeader, StyledArrowCircleDownSharpIcon, StyledArrowCircleUpSharpIcon, ColumnSpacing, ImageContainer, Image, Banner, BannerImage, PicsTitle, UserImage, CardButton } from './Styles/HomeStyles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import UploadIcon from '@mui/icons-material/Upload';
import { useQuery } from 'react-query'
import { getPosts } from '../../api/posts';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import bannerImage from '../../assets/images/bannerImage.svg';
import { kFormatter } from '../../utilities/StringUtil';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { LayoutContainer, LayoutSpacing } from '../../components/header/styles/HeaderStyles';
import ThanksDialog from '../../components/thanksDialog/ThanksDialog';

const Home = () => {

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('hot');
    const { isLoading, error, data, refetch, isFetching } = useQuery(['authData ', category], () => getPosts(category), { staleTime: 180000 /*3 minutes*/ })

    const handleCategoryChange = (e) => {
        setCategory(e);
        if(e === category){
          refetch(); // in social networks every you press the home button 2 or more times the content updates (example facebook)
        }
    }

    const handleModalChange = () => {
        setOpen(!open);
    }

    const Post = ({ item }) => {

        return (
            <CardItem>
                <CardItemHeader>
                    <ColumnSpacing style={{ textAlign: 'center' }}>
                        <StyledArrowCircleUpSharpIcon onClick={handleModalChange} />
                        {kFormatter(item.score)}
                        <StyledArrowCircleDownSharpIcon onClick={handleModalChange} />
                    </ColumnSpacing>

                    <ColumnSpacing >
                        <CardPostedText>Posted by u/:{item.author} {formatDistanceToNow(new Date(fromUnixTime(item.created_utc)))} ago</CardPostedText>
                        <CardPostedTitle>{item.title}</CardPostedTitle>
                    </ColumnSpacing>
                </CardItemHeader>
                {item.thumbnail != "self" &&
                    <ImageContainer>
                        <Image src={item.url} />
                    </ImageContainer>
                }
                <Divider />
                <CardButton onClick={handleModalChange} startIcon={<ChatBubbleOutlineOutlinedIcon />}>
                    {kFormatter(item.num_comments)} Comments

                </CardButton>
                <Divider />

            </CardItem>
        )
    }

    if (isLoading) return <Container> <Loading size='10em' /> </Container>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <Container>
            <Banner>
                <BannerImage src={bannerImage} />
            </Banner>

            <HomeContainer>
                <LayoutSpacing/> {/*layout spacing */}
                <LayoutContainer> {/*layout body */}
                    <UserImage src="https://cdn-0.emojis.wiki/emoji-pics/microsoft/rocket-microsoft.png" />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '120px' }}>
                        <PicsTitle>
                            Reddit pics {isFetching && <Loading size='1em' withoutMargin />}
                        </PicsTitle>
                        <SectionTitle>
                            r/pics
                        </SectionTitle>
                    </div>
                    <FiltersCard>
                        <StyledFilterButton active={category === "hot"}
                            onClick={() => handleCategoryChange("hot")} startIcon={<WhatshotIcon />} >
                            Hot
                        </StyledFilterButton>
                        <StyledFilterButton active={category === "new"}
                            onClick={() => handleCategoryChange("new")} startIcon={<NewReleasesIcon />} >
                            New
                        </StyledFilterButton>
                        <StyledFilterButton active={category === "top"}
                            onClick={() => handleCategoryChange("top")} startIcon={<UploadIcon />} >
                            Top
                        </StyledFilterButton>
                    </FiltersCard>
                    <Divider />
                    <Divider />

                    {data.data.children.map((item, index) => (
                        <Fragment key={index}>
                            <Post item={item.data} />
                            <Divider />
                        </Fragment>
                    ))}

                    <ThanksDialog open={open} handleClose={handleModalChange} />
                </LayoutContainer>
                <LayoutSpacing/> {/*layout spacing */}
            </HomeContainer>
        </Container>
    );
};
export default Home;