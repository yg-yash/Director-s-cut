import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';

const ImageSliderDialog = ({ showModal, array, setShowModal }) => {
  return (
    <Dialog
      open={showModal}
      fullWidth
      onClose={() => setShowModal(false)}
      aria-labelledby="form-dialog-title"
    >
      <Slider {...settings}>
        {array.map((item) => (
          <>
            <DialogActions>
              <IconButton
                aria-label="close"
                color="primary"
                onClick={() => setShowModal(false)}
              >
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogContent>
              <Paper elevation={6} style={{ padding: 10 }}>
                <img
                  alt="asdad"
                  style={{ flexWrap: 1, width: '100%', height: '100%' }}
                  src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                />
              </Paper>
            </DialogContent>
          </>
        ))}
      </Slider>
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

export default ImageSliderDialog;
