import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuDrawer from '../MenuDrawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../../store/actions/directorsActions/loginActions';

export default function Navbar() {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const toggleDrawer = () => setShowDrawer((value) => !value);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component={Link}
            to="/"
          >
            App Name
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
                onClick={() => dispatch(loginActions.logOut())}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<VpnKeyIcon />}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<PersonAddIcon />}
                  component={Link}
                  to="/signup"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={showDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <MenuDrawer open={showDrawer} toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    margin: '0 10px 0 10px',
  },
}));
