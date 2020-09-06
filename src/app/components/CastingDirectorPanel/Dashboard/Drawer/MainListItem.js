import React, { useState } from 'react';
//mui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core';
//mui icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import QueueIcon from '@material-ui/icons/Queue';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import FaceIcon from '@material-ui/icons/Face';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import PaymentIcon from '@material-ui/icons/Payment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useHistory } from 'react-router-dom';

const MainListItems = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [showAuditionList, setShowAuditionList] = useState(false);

  const toggleshowAuditionList = () => setShowAuditionList((value) => !value);
  return (
    <div>
      <Tooltip title="Dashboard" aria-label="dashboard">
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Buy/Manage Membership" aria-label="buy">
        <ListItem button>
          <ListItemIcon>
            <CardMembershipIcon />
          </ListItemIcon>
          <ListItemText primary="Buy/Manage Membership" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Users Portfolio" aria-label="buy">
        <ListItem button onClick={() => history.push('/portfolios')}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Users Portfolio" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Auditions" aria-label="auditions">
        <ListItem button onClick={toggleshowAuditionList}>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Auditions" />
          {showAuditionList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Tooltip>
      <Collapse in={showAuditionList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Tooltip
            title="Conduct Online Auditions/Interviews"
            aria-label="online"
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <QueueIcon />
              </ListItemIcon>
              <ListItemText primary="Conduct Online Auditions/Interviews" />
            </ListItem>
          </Tooltip>
          <Tooltip title="Recorded Auditions" aria-label="recorded">
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <MovieFilterIcon />
              </ListItemIcon>
              <ListItemText primary="Recorded Auditions" />
            </ListItem>
          </Tooltip>
        </List>
      </Collapse>
      <Tooltip title="Payments" aria-label="payments">
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Audition Timing" aria-label="auditionTiming">
        <ListItem button>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Audition Timing" />
        </ListItem>
      </Tooltip>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  item: {
    fontSize: 15,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default MainListItems;
