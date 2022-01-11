import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import COLORS from "../../../theme/Colors";
import FONTS_FAMILY from "../../../theme/FontsFamily";

export const HomeContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    minHeight: '100vh'
});

export const PicsTitle = styled('h1')({
    fontFamily: FONTS_FAMILY.bold.title,
    fontSize: '30px',
    margin: 0,
});

export const SectionTitle = styled('p')({
    fontFamily: FONTS_FAMILY.medium.title,
    color: COLORS.gray,
    fontSize: '15px',
    margin: 0,
    marginBottom: '10px'
});

export const FiltersCard = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    minHeight: '60px',
    border: '1px solid',
    borderRadius: '1px',
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    alignItems: 'center'
});

export const CardItem = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '2vh',
    border: '1px solid',
    borderRadius: '1px',
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    '&:hover': {
        borderColor: COLORS.gray,
    }
});

export const CardItemHeader = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
});

export const ColumnSpacing = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    fontFamily: FONTS_FAMILY.bold.title,
    fontSize: '12px',
});


export const CardPostedText = styled('p')({
    fontFamily: FONTS_FAMILY.medium.body,
    color: COLORS.gray,
    fontSize: '10px'
});

export const CardPostedTitle = styled('p')({
    marginTop: '2px',
    fontFamily: FONTS_FAMILY.bold.title,
    color: COLORS.black,
    fontSize: '17px'
});

export const StyledFilterButton = styled(Button)(props => ({
    margin: '5px',
    border: '0px solid',
    borderRadius: '20px',
    width: '100px',
    height: '32px',
    fontSize: '12px',
    fontFamily: FONTS_FAMILY.bold.title,
    color: props.active ? COLORS.tertiary : COLORS.gray,
    backgroundColor: props.active ? COLORS.fieldGray : null
}));

export const CardButton = styled(Button)({
    margin: '5px',
    border: '0px solid',
    borderRadius: '3px',
    height: '32px',
    fontSize: '12px',
    fontFamily: FONTS_FAMILY.bold.title,
    color: COLORS.gray,
    '@media (min-width:320px)': {
        maxWidth: '150px',
    },
    '@media (min-width:768px)': {
        maxWidth: '180px',
    },
    '@media (min-width:1200px)': {
        maxWidth: '200px',
    },
    '&:hover': {
        backgroundColor: COLORS.lightGray
    }
});

export const Loading = styled(CircularProgress)(props => ({
    alignSelf: 'center',
    marginTop: props.withoutMargin ? 0 : '20%'
}));

export const Divider = styled('div')({
    height: '10px'
});

export const StyledArrowCircleUpSharpIcon = styled(ArrowCircleUpSharpIcon)({
    cursor: 'pointer',
    color: COLORS.gray,
    '&:hover': {
        color: COLORS.primary,
    }
});

export const StyledArrowCircleDownSharpIcon = styled(ArrowCircleDownSharpIcon)({
    cursor: 'pointer',
    color: COLORS.gray,
    '&:hover': {
        color: COLORS.tertiary,
    }
});

export const ImageContainer = styled('div')({
    display: 'flex',
    alignSelf: 'center',
});

export const Image = styled('img')({
    '@media (min-width:320px)': {
        maxWidth: '250px',
    },
    '@media (min-width:768px)': {
        maxWidth: '400px',
    },
    '@media (min-width:1200px)': {
        maxWidth: '500px',
    }
});

export const Banner = styled('div')({
    display: 'flex',
    backgroundColor: '#5a74cc',
    width: '100%',
    height: '130px',
    alignItems: 'center',
    justifyContent: 'center'
});

export const BannerImage = styled('img')({
    width: '150px',
});

export const UserImage = styled('img')({
    backgroundColor: COLORS.white,
    position: 'absolute',
    marginTop: '-30px',
    borderRadius: '50%',
    '@media (min-width:320px)': {
        width: '100px',
    },
    '@media (min-width:768px)': {
        width: '100px',
    },
    '@media (min-width:1200px)': {
        width: '100px',
    }
});

export const LayoutSpacing = styled('div')({
    width: '15%'
});

export const LayoutContainer = styled('div')({
    minWidth: '70%',
    '@media (min-width:4000px)': {
        maxWidth: '4000px',
        minWidth: '0',
    }
});
