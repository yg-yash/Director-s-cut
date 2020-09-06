import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  large: {
    width: 230,
    height: 230,
    position: 'relative',
  },
  container: {
    padding: theme.spacing(5),
    width: '100%',
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cameraEditIcon: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 40,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: '10px 0 10px 0',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditProfile = ({ show, setShow }) => {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [fileObj, setFileObj] = useState();

  const handleClose = () => setShow(false);

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
      <Dialog
        fullScreen
        open={show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Profile
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => setShow(false)}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.row}>
            <input
              accept="image/*"
              className={classes.input}
              id="imageInput"
              multiple
              hidden
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <IconButton onClick={handleEditPicture}>
                <Avatar
                  src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                  className={classes.large}
                />
                <CameraAltIcon
                  color="primary"
                  className={classes.cameraEditIcon}
                />
              </IconButton>
            </label>
            <Grid item xs={12} md={6} style={{ marginTop: 20, width: '100%' }}>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  label="Name"
                  type="text"
                  fullWidth
                  className={classes.textField}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="Age"
                  type="number"
                  fullWidth
                  className={classes.textField}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="About"
                  type="text"
                  multiline
                  rows={4}
                  fullWidth
                  className={classes.textField}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="Hobbies"
                  type="number"
                  multiline
                  rows={3}
                  fullWidth
                  className={classes.textField}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="Talents"
                  type="number"
                  fullWidth
                  multiline
                  rows={3}
                  className={classes.textField}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default EditProfile;
