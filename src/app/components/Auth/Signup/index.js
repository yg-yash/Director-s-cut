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
        marginTop: 20,
      }}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

export default function Signup() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [directorEmail, setDirectorEmail] = useState('');
  const [directorName, setDirectorName] = useState('');
  const [directorPassword, setDirectorPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const onDirectorFormSubmit = (e) => {
    e.preventDefault();
    console.log('director');
  };
  const onAdminFormSubmit = (e) => {
    e.preventDefault();
    console.log('admin');
  };

  const renderSignup = (
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    onFormSubmit
  ) => (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <TextField
        variant="outlined"
        label="Your Name"
        type="text"
        fullWidth
        className={classes.textField}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<VpnKeyIcon />}
        type="submit"
      >
        Sign Up
      </Button>

      <div className={classes.signUpRow}>
        <Typography variant="body1">Already A User?</Typography>
        <MuiLink
          component={Link}
          to="/login"
          color="primary"
          variant="body2"
          className={classes.signUpBtn}
        >
          LogIn
        </MuiLink>
      </div>
    </form>
  );

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6} className={classes.container}>
        <Card variant="elevation" elevation={3} className={classes.card}>
          <CardHeader
            title="Sign Up As"
            titleTypographyProps={{ align: 'center' }}
          ></CardHeader>
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
                <Tab label="Casting Director" className={classes.tabLabel} />
                <Tab label="Admin" className={classes.tabLabel} />
              </Tabs>
            </AppBar>
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
              <TabPanel value={value} index={0}>
                {renderSignup(
                  directorName,
                  directorEmail,
                  directorPassword,
                  setDirectorName,
                  setDirectorEmail,
                  setDirectorPassword,
                  onDirectorFormSubmit
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {renderSignup(
                  adminName,
                  adminEmail,
                  adminPassword,
                  setAdminName,
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
    minWidth: 400,
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
