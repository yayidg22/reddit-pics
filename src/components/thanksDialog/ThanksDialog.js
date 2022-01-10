import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LottieAnimation } from './styles/ThanksDialogStyles';
import Lottie from 'react-lottie';
import RocketAnimation from '../../assets/animations/rocket.json'

export default function ThanksDialog({ open, handleClose }) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: RocketAnimation,
    };



    return (

        <Dialog
            fullWidth={true}
            open={open}
            onClose={handleClose}
        >
            <LottieAnimation>
                <Lottie isClickToPauseDisabled options={defaultOptions} />
            </LottieAnimation>
            <DialogContent style={{}}>

                <DialogContentText>
                    Thanks for watch my project :) see my other projects on my &nbsp;
                    <a href="https://github.com/yayidg22">GitHub</a>  or <a href='https://github.com/yayidg22'>My Personal Portafolio</a>
                    <br/>
                    Made with :
                    <br/>
                    -React
                    <br/>
                    -Material UI
                    <br/>
                    -Emotion/Styled
                    <br/>
                    -React Lottie
                    <br/>
                    -Date-nfs
                    <br/>
                    -React Query
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}