import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../../store/actions/userActions/loginActions';

const MenuDrawer = (props) => {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  const dispatch = useDispatch();
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
      onKeyDown={props.toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => dispatch(loginActions.logOut())}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
  const notAuthList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
      onKeyDown={props.toggleDrawer}
    >
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </div>
  );

  return <>{isLoggedIn ? list() : notAuthList()}</>;
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default MenuDrawer;
