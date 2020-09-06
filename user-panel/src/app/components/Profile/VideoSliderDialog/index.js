import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

const VideoSliderDialog = ({ setShowVideoModal, showVideoModal }) => {
  return (
    <Dialog
      fullScreen
      open={showVideoModal}
      onClose={() => setShowVideoModal(false)}
      aria-labelledby="form-dialog-title"
    >
      {/* <Slider {...settings}> */}
      <DialogActions>
        <IconButton
          aria-label="close"
          color="primary"
          onClick={() => setShowVideoModal(false)}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <Paper
          elevation={6}
          style={{
            padding: 10,
            width: '100%',
            height: '100%',
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/embed/DGQwd1_dpuc"
            controls
            width="100%"
            height="100%"
            pip={false}
          />
        </Paper>
      </DialogContent>
      {/* </Slider> */}
    </Dialog>
  );
};

const settings = {
  dots: false,
  speed: 500,
  lazyLoad: true,
  infinte: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: '',
  prevArrow: '',
  edgeFriction: 0,
};

export default VideoSliderDialog;
