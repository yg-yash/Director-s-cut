import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReactPlayer from 'react-player/lazy';
import VideoRecorder from 'react-video-recorder';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: '20px 0 10px 0',
    alignSelf: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileButton: {},
  endRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
}));

export default function JoinModal(props) {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [fileObj, setFileObj] = useState();
  const [loading, setLoading] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [recordVideo, setRecordVideo] = useState(false);
  const handleImageChange = (event) => {
    setFileObj(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };
  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  return (
    <div>
      <input
        type="file"
        id="imageInput"
        onChange={handleImageChange}
        hidden="hidden"
        multiple
        accept="video/*"
      />
      <Dialog
        open={props.open}
        onClose={props.toggleJoinModal}
        aria-labelledby="form-dialog-title"
        fullScreen={!uploaded && (recordVideo || fileObj)}
      >
        <DialogTitle id="form-dialog-title">Add Video</DialogTitle>
        <DialogContent className={classes.container}>
          {recordVideo && !uploaded && (
            <VideoRecorder
              onRecordingComplete={(videoBlob) => {
                setFileObj(null);
                setFile(videoBlob);
                console.log('videoBlob', videoBlob);
              }}
            />
          )}
          {fileObj && !uploaded && (
            <Paper elevation={6} style={{ padding: 10 }}>
              <ReactPlayer
                url={fileObj}
                controls
                width="100%"
                height="100%"
                pip={false}
              />
            </Paper>
          )}

          {uploaded ? (
            <div className={classes.row}>
              <CheckCircleIcon color="primary" />
              <Typography variant="h6">Competition Joined</Typography>
            </div>
          ) : (
            <Grid
              container
              spacing={2}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setFileObj(null);
                    setRecordVideo(true);
                  }}
                  variant="outlined"
                  startIcon={<VideocamIcon />}
                  color="primary"
                  className={classes.buttons}
                >
                  Record
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.endRow}>
                <Button
                  startIcon={<VideoCallIcon />}
                  onClick={() => {
                    setRecordVideo(false);
                    handleEditPicture();
                  }}
                  variant="outlined"
                  className={`${classes.buttons} ${classes.fileButton}`}
                  color="primary"
                >
                  Choose A File
                </Button>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          {uploaded ? (
            <Button
              variant="contained"
              color="primary"
              onClick={props.toggleJoinModal}
            >
              Close
            </Button>
          ) : loading ? (
            <CircularProgress size={20} />
          ) : (
            <>
              <Button onClick={props.toggleJoinModal} color="primary">
                Cancel
              </Button>
              <Button
                disabled={!file}
                variant="contained"
                color="primary"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setUploaded(true);
                  }, 500);
                }}
              >
                Submit
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
