import styled from "@emotion/styled";
import { Avatar, Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';

import COLORS from "../../../theme/Colors";
import FONTS_FAMILY from "../../../theme/FontsFamily";


export const StyledAppBar = styled(AppBar)({
    backgroundColor: COLORS.white
});

export const LogoContainer = styled('img')({
    width: '90px',
    cursor: 'pointer',
});

export const StyledAvatar = styled(Avatar)({
    //   backgroundColor:COLORS.white
});

export const HeaderItemsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '98%',
});

export const StyledHeaderButton = styled(Button)(props => ({
    border: '1px solid',
    borderRadius: '20px',
    borderColor: COLORS.tertiary,
    width: '130px',
    height: '32px',
    fontSize: '12px',
    fontFamily: FONTS_FAMILY.bold.title,
    backgroundColor: props.outlined ? null : COLORS.tertiary,
    color: props.outlined ? COLORS.tertiary : COLORS.white,
    '&:hover': {
        backgroundColor: props.outlined ? null : COLORS.tertiary,
        color: props.outlined ? COLORS.tertiary : COLORS.white,
    }
}));

export const HeaderItemDivider = styled('div')({
    width: '15px',
});
