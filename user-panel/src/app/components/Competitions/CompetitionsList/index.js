import React, { useEffect, useState } from 'react';
//mui
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
//mui icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReportIcon from '@material-ui/icons/Report';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useSelector, useDispatch } from 'react-redux';

import * as competitionsActions from '../../../store/actions/competitions/competitionsActions';

import JoinModal from './JoinModal';

const CompetitionsList = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [optionsAnchorEl, setOptionsAnchorEl] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const [reportItems, setReportItems] = useState([
    { value: 'Nudity', selected: false },
    { value: 'Violence', selected: false },
    { value: 'Harrasment', selected: false },
  ]);
  const [sortBy, setSortBy] = React.useState('age');
  const [showJoinModal, setShowJoinModal] = useState(false);
  const toggleJoinModal = () => setShowJoinModal((value) => !value);
  const dispatch = useDispatch();

  const { isCompetitionsLoading } = useSelector(
    (state) => state.loadingCompetitions
  );
  const { competitionsList } = useSelector(
    (state) => state.competitionsReducer
  );
  useEffect(() => {
    dispatch(competitionsActions.requestCompetitions());
  }, [dispatch]);
  const classes = useStyles();

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  const toggleLike = () => setIsLiked((value) => !value);
  const toggleSave = () => setIsSaved((value) => !value);
  const toggleReportItems = (item) =>
    setReportItems((value) =>
      value.map((innerItem) => {
        if (innerItem.value === item.value) {
          innerItem.selected = !innerItem.selected;
          return innerItem;
        }
        return innerItem;
      })
    );

  const optionsHandleClick = (event) => setOptionsAnchorEl(event.currentTarget);
  const handleCloseOptionsMenu = () => setOptionsAnchorEl(null);
  const shareHandleClick = (event) => setShareAnchorEl(event.currentTarget);
  const handleCloseShareMenu = () => setShareAnchorEl(null);

  const renderShareMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={shareAnchorEl}
      keepMounted
      open={Boolean(shareAnchorEl)}
      onClose={handleCloseShareMenu}
    >
      <MenuItem onClick={handleCloseShareMenu}>
        <FacebookIcon style={{ marginRight: 10, color: 'blue' }} /> Facebook
      </MenuItem>
      <MenuItem onClick={handleCloseShareMenu}>
        <InstagramIcon style={{ marginRight: 10, color: '#C13584' }} />{' '}
        Instagram
      </MenuItem>
      <MenuItem onClick={handleCloseShareMenu}>
        <TwitterIcon style={{ marginRight: 10, color: '#00acee' }} /> Twitter
      </MenuItem>
    </Menu>
  );

  const renderOptionsMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={optionsAnchorEl}
      keepMounted
      open={Boolean(optionsAnchorEl)}
      onClose={handleCloseOptionsMenu}
    >
      {isSaved ? (
        <MenuItem
          onClick={() => {
            toggleSave();
            // handleClose();
          }}
        >
          <BookmarkIcon style={{ marginRight: 10, color: '#ad1457' }} /> Unsave
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            toggleSave();
            // handleClose();
          }}
        >
          <BookmarkBorderIcon style={{ marginRight: 10, color: '#999999' }} />{' '}
          Save
        </MenuItem>
      )}

      <MenuItem
        onClick={() => {
          handleCloseOptionsMenu();
          setShowOptions(true);
        }}
      >
        <ReportIcon style={{ marginRight: 10, color: '#999999' }} /> Report
      </MenuItem>
    </Menu>
  );

  return (
    <Grid container className={classes.root}>
      {isCompetitionsLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid item xs={12} className={classes.firstRow}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-error-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  onChange={handleChange}
                >
                  <MenuItem value="age">Age</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="talent">Talent</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {competitionsList.map((item) => (
                <Card className={classes.card} elevation={5} key={item.id}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                      </Avatar>
                    }
                    action={
                      <IconButton
                        aria-label="settings"
                        onClick={optionsHandleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="h6"
                    >
                      {item.competitionName}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p"
                    >
                      For Age: {item.age}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={toggleLike}
                      >
                        {isLiked ? (
                          <FavoriteIcon style={{ color: 'red' }} />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="share" onClick={shareHandleClick}>
                        <ShareIcon />
                      </IconButton>
                    </div>
                    <Button
                      className={classes.button}
                      onClick={toggleJoinModal}
                    >
                      Join
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>
          <Box
            component={Grid}
            className={classes.gridItem}
            item
            xs={4}
            display={{ xs: 'none', md: 'block' }}
          >
            <Grid item>
              <div className={`${classes.firstRow} ${classes.formControl}`}>
                Trending Competitions
              </div>

              <Card
                style={{
                  minHeight: 300,
                }}
                elevation={5}
              >
                <p>Trending Data</p>
              </Card>
            </Grid>
          </Box>
        </Grid>
      )}
      {renderOptionsMenu()}
      {renderShareMenu()}
      <Dialog
        onClose={() => setShowOptions(false)}
        aria-labelledby="simple-dialog-title"
        open={showOptions}
        style={{ minWidth: 300 }}
      >
        <DialogTitle id="simple-dialog-title">
          Report By Clicking On Items
        </DialogTitle>
        <Grid
          item
          xs={3}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}
        >
          {reportItems.map((item) =>
            item.selected ? (
              <Chip
                className={classes.chip}
                label={item.value}
                color="primary"
                clickable
                onClick={() => toggleReportItems(item)}
              />
            ) : (
              <Chip
                className={classes.chip}
                label={item.value}
                clickable
                onClick={() => toggleReportItems(item)}
              />
            )
          )}
        </Grid>

        <DialogActions>
          <Button onClick={() => setShowOptions(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setShowOptions(false);
            }}
            color="primary"
            variant="contained"
            disabled={!reportItems.find((value) => value.selected === true)}
          >
            Submit Report
          </Button>
        </DialogActions>
      </Dialog>

      {showJoinModal && (
        <JoinModal open={showJoinModal} toggleJoinModal={toggleJoinModal} />
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 10,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    width: '30%',
    color: 'white',
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  chip: {
    margin: '0 10px 0 10px',
  },
}));

export default CompetitionsList;
