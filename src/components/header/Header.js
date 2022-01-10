import { Fragment, useState } from 'react';
import {
    LogoContainer,
    StyledAppBar,
    HeaderItemsContainer,
    StyledHeaderButton,
    HeaderItemDivider
} from './styles/HeaderStyles';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { WindowSharp } from '@mui/icons-material';
import ThanksDialog from '../thanksDialog/ThanksDialog';
const Header = () => {
    const matches = useMediaQuery("(min-width:768px)");
    const [open, setOpen] = useState(false);
    
    const handleModalChange = () => {
        setOpen(!open);
    }

    return (
        <StyledAppBar position="sticky">
            <HeaderItemsContainer>
                <LogoContainer src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    {
                        !matches ?

                            <IconButton onClick={handleModalChange} aria-label="delete">
                                <MenuOutlinedIcon />
                            </IconButton>
                            :
                            <Fragment>
                                <StyledHeaderButton onClick={handleModalChange} outlined>
                                    Log In
                                </StyledHeaderButton>
                                <HeaderItemDivider />

                                <StyledHeaderButton onClick={handleModalChange}>
                                    Sign Up
                                </StyledHeaderButton>
                                <HeaderItemDivider />
                            </Fragment>
                    }
                    <ThanksDialog open={open} handleClose={handleModalChange} />

                </div>
            </HeaderItemsContainer>
        </StyledAppBar>
    );
};
export default Header;