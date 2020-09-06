import React, { useState } from 'react';
//mui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PropTypes from 'prop-types';
import ImagesSliderDialog from './ImageSliderDialog';
import VideoSliderDialog from './VideoSliderDialog';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import EditProfile from './EditProfile';
const array = [12, 3, 4, 5, 6];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Profile = (props) => {
  const classes = styles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [file, setFile] = useState();
  const [fileObj, setFileObj] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleImageChange = (event) => {
    setFileObj(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };
  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  const renderInformationView = () => (
    <div style={{ overflow: 'auto' }}>
      <Typography variant="body2" style={{ color: '#99999' }}>
        Profile ID: 1234567
      </Typography>
      <div className={classes.spaceDiv}>
        <Typography variant="h6" className={classes.heading}>
          Appearance
        </Typography>
      </div>
      <Grid container className={classes.row}>
        <Typography variant="body1" className={classes.subHeading}>
          Gender: <span className={classes.detailsText}>Girl</span>
        </Typography>
        <Typography className={classes.subHeading}>
          Age: <span className={classes.detailsText}>16 y.o</span>
        </Typography>
        <Typography className={classes.subHeading}>
          Weight:<span className={classes.detailsText}>110 lbs</span>
        </Typography>
        <Typography className={classes.subHeading}>
          Eye color: <span className={classes.detailsText}>Hazel</span>
        </Typography>
        <Typography className={classes.subHeading}>
          Hair color: <span className={classes.detailsText}>Black</span>
        </Typography>
      </Grid>
      <div className={classes.spaceDiv}>
        <Typography variant="h6" className={classes.heading}>
          About
        </Typography>
      </div>
      <Typography>
        I am 13 years old. I am in eighth grade. I am Hispanicand I speak
        Spanish. I wear glasses. I am a big sister. I love to hang out with my
        friends.
      </Typography>
      <div className={classes.spaceDiv}>
        <Typography variant="h6" className={classes.heading}>
          Hobbies
        </Typography>
      </div>
      <Typography>Soccer</Typography>
      <div className={classes.spaceDiv}>
        <Typography variant="h6" className={classes.heading}>
          Talents
        </Typography>
      </div>
      <Typography>I am very good at maths, I am the highest</Typography>
      <div className={classes.spaceDiv}>
        <Typography variant="h6" className={classes.heading}>
          Share Profile
        </Typography>
      </div>
      <div className={`${classes.row} ${classes.halfWidth}`}>
        <Tooltip title="Facebook">
          <IconButton>
            <FacebookIcon style={{ color: 'blue' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton>
            <InstagramIcon style={{ color: '#C13584' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Twitter">
          <IconButton>
            <TwitterIcon style={{ color: '#00acee' }} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );

  const renderImages = () => (
    <Grid container>
      {array.map((item, index) => (
        <Grid item xs={6} sm={6} md={3}>
          <Card
            key={index}
            className={classes.imagesCard}
            onClick={() => setShowImagesModal(true)}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              width="100%"
              src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
              title="Contemplative Reptile"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  const renderVideos = () => (
    <Grid container>
      {array.map((item, index) => (
        <Grid item xs={6} sm={6} md={3}>
          <Card
            key={index}
            className={classes.imagesCard}
            onClick={() => setShowVideoModal(true)}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="50%"
              width="50%"
              src="data:image/png;base64,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"
              title="Contemplative Reptile"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderHistory = () => (
    <Grid container>
      {array.map((item, index) => (
        <Grid item xs={12}>
          <Card
            key={index}
            className={classes.imagesCard}
            onClick={() => setShowVideoModal(true)}
          >
            Details
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ height: '80vh' }}>
        <Grid item xs={12} className={classes.firstRow}>
          <Card className={classes.card} elevation={5}>
            <CardHeader
              avatar={
                <Avatar
                  src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                  className={classes.image}
                />
              }
              action={
                <Tooltip title="Edit Profile">
                  <IconButton
                    aria-label="settings"
                    color="primary"
                    onClick={() => setShowEditModal(true)}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                </Tooltip>
              }
              title={<Typography variant="h6">John Doe</Typography>}
              subheader={<Typography variant="body2">Age 15</Typography>}
            />

            <CardContent style={{ padding: 0 }}>
              <AppBar position="static" color="primary">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Information" {...a11yProps(0)} />
                  <Tab label="Gallery" {...a11yProps(1)} />
                  <Tab label="History" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  {renderInformationView()}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div className={classes.row}>
                    <div className={classes.spaceDiv}>
                      <Typography variant="h6" className={classes.heading}>
                        Photos
                      </Typography>
                      <Typography variant="caption">
                        Note: You can only add upto 5 images
                      </Typography>
                    </div>

                    <Tooltip title="Add More" onClick={handleEditPicture}>
                      <IconButton aria-label="settings" color="primary">
                        <AddToPhotosIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="imageInput"
                      multiple
                      hidden
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>
                  {renderImages()}
                  <div className={classes.row}>
                    <div className={classes.spaceDiv}>
                      <Typography variant="h6" className={classes.heading}>
                        Videos
                      </Typography>
                      <Typography variant="caption">
                        Note: You can only add upto 2 videos
                      </Typography>
                    </div>
                    <Tooltip title="Add More" onClick={handleEditPicture}>
                      <IconButton aria-label="settings" color="primary">
                        <LibraryAddIcon color="primary" />
                      </IconButton>
                    </Tooltip>
                    <input
                      accept="video/*"
                      className={classes.input}
                      id="imageInput"
                      multiple
                      hidden
                      type="file"
                      onChange={handleImageChange}
                    />
                  </div>

                  {renderVideos()}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Typography variant="h6" className={classes.heading}>
                    Recently Joined Competitions
                  </Typography>
                  {renderHistory()}
                </TabPanel>
              </SwipeableViews>
            </CardContent>
          </Card>
        </Grid>
        <ImagesSliderDialog
          showModal={showImagesModal}
          setShowModal={setShowImagesModal}
          array={array}
        />
        <VideoSliderDialog
          showVideoModal={showVideoModal}
          setShowVideoModal={setShowVideoModal}
        />
        <EditProfile show={showEditModal} setShow={setShowEditModal} />
      </Grid>
    </div>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '100%',
    width: '100%',
    padding: 0,
  },
  image: {
    borderRadius: 130,
    width: 130,
    height: 130,
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spaceDiv: {
    margin: '20px 0 20px 0',
  },
  subHeading: {
    fontWeight: '700',
    margin: '0 20px 20px 0',
  },
  detailsText: {
    fontSize: 14,
  },
  halfWidth: {
    width: '30%',
  },
  mediaRow: {
    //flexWrap: 'wrap',
  },
  imagesCard: {
    margin: '10px 0 0 10px',
    alignSelf: 'center',
    cursor: 'pointer',
  },
  addCard: {
    margin: '10px 0 0 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    height: 70,
    width: 70,
  },
}));

export default Profile;
