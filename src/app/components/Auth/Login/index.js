import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import * as directorLoginActions from '../../../store/actions/directorsActions/loginActions';
import * as adminLoginActions from '../../../store/actions/adminActions/loginActions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
      }}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Login(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [directorEmail, setDirectorEmail] = useState('');
  const [directorPassword, setDirectorPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const { isLoginLoading } = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => setValue(newValue);

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const onDirectorFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      directorLoginActions.requestLogin(
        'test@gmail.com',
        'oasswr',
        props.history
      )
    );
  };
  const onAdminFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      adminLoginActions.requestLogin('test@gmail.com', 'oasswr', props.history)
    );
  };

  const renderLogin = (
    email,
    password,
    setEmail,
    setPassword,
    onFormSubmit
  ) => (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <TextField
        variant="outlined"
        label="Email"
        type="email"
        fullWidth
        className={classes.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        fullWidth
        className={classes.textField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <MuiLink component={Link} variant="body2" to="/forget">
          Forgot password?
        </MuiLink>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={!isLoginLoading && <VpnKeyIcon />}
        type="submit"
      >
        {isLoginLoading ? <CircularProgress color="secondary" /> : 'Login'}
      </Button>

      <div className={classes.signUpRow}>
        <Typography variant="body1">New User?</Typography>
        <MuiLink
          component={Link}
          to="/signup"
          color="primary"
          variant="body2"
          className={classes.signUpBtn}
        >
          Sign Up
        </MuiLink>
      </div>
    </form>
  );

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6} className={classes.container}>
        <Card variant="elevation" elevation={3} className={classes.card}>
          <CardHeader title="Log In" titleTypographyProps={{ align: 'center' }}>
            <Typography>Login In As</Typography>
          </CardHeader>
          <CardContent style={{ padding: 0, margin: 0 }}>
            <AppBar position="static" color="primary">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                variant="fullWidth"
                textColor="secondary"
                aria-label="full width tabs example"
                className={classes.tabHeader}
              >
                <Tab
                  label="Casting Director"
                  className={classes.tabLabel}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Admin"
                  className={classes.tabLabel}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
              <TabPanel value={value} index={0}>
                {renderLogin(
                  directorEmail,
                  directorPassword,
                  setDirectorEmail,
                  setDirectorPassword,
                  onDirectorFormSubmit
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {renderLogin(
                  adminEmail,
                  adminPassword,
                  setAdminEmail,
                  setAdminPassword,
                  onAdminFormSubmit
                )}
              </TabPanel>
            </SwipeableViews>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    minHeight: '100%',
    width: '100%',
    margin: 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    flexGrow: 1,
    padding: 0,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    margin: theme.spacing(5),
    flexGrow: 1,

    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  tabNavbar: {},
  tabHeader: {},
  tabLabel: {
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    height: '90px',
  },
  button: {
    margin: 20,
  },
  signUpRow: {
    display: 'flex',
    alignItems: 'center',
  },
  signUpBtn: {
    marginLeft: 5,
  },
}));
