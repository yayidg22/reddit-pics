import styled from "@emotion/styled";

export const LottieAnimation = styled('div')({
    display:'flex',
    alignSelf:'center',
    alignItems:'center',
    '@media (min-width:320px)': {
        width: '180px',
    },
    '@media (min-width:768px)': {
        width: '250px',
    },
})