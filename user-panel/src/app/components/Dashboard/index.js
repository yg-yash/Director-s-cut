import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import CompetitionsList from '../Competitions/CompetitionsList';
import Audition from '../Audition';
import Profile from '../Profile';

import ELearning from '../ELearning';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    borderTop: '1px solid rgba(0,0,0,0.3)',
  },
  label: {
    fontSize: 50,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [components, setComponents] = useState([
    { name: 'CompetitionsList', component: <CompetitionsList /> },
    { name: 'ELearning', component: <ELearning /> },
    { name: 'Audition', component: <Audition /> },
    { name: 'Profile', component: <Profile /> },
  ]);
  const [currentComponent, setCurrentComponent] = useState(components[0]);
  return (
    <div>
      <div style={{ overflow: 'auto', height: '80vh' }}>
        {currentComponent.component}
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Competitions"
          icon={<ListAltIcon />}
          onClick={() => setCurrentComponent(components[0])}
        />
        <BottomNavigationAction
          label="E-Learning"
          icon={<LibraryBooksIcon />}
          onClick={() => setCurrentComponent(components[1])}
        />
        <BottomNavigationAction
          label="Audition"
          icon={<EmojiPeopleIcon />}
          onClick={() => setCurrentComponent(components[2])}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          onClick={() => setCurrentComponent(components[3])}
        />
      </BottomNavigation>
    </div>
  );
};

export default Dashboard;
