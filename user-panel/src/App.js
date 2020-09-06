import React from 'react';
//mui
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import AuthenticatedRoute from './app/utils/AuthenticatedRoute';
import UnAuthenticatedRoute from './app/utils/UnAuthenticatedRoute';
import Navbar from './app/components/UI/Navbar';
import Login from './app/components/Auth/Login/';
import SignUp from './app/components/Auth/Signup';
import ForgetPassword from './app/components/Auth/ForgetPassword';
import Dashboard from './app/components/Dashboard';
import CompetitionsList from './app/components/Competitions/CompetitionsList';
import ELearning from './app/components/ELearning';
import PageNotFound from './app/components/UI/PageNotFound';
import Profile from './app/components/Profile';

import themeFile from './app/utils/theme';

const theme = createMuiTheme(themeFile);

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <UnAuthenticatedRoute
                path="/login"
                component={Login}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <UnAuthenticatedRoute
                path="/signup"
                component={SignUp}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <UnAuthenticatedRoute
                path="/forget"
                component={ForgetPassword}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <AuthenticatedRoute
                path="/"
                exact
                component={Dashboard}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <AuthenticatedRoute
                path="/competitions"
                exact
                component={CompetitionsList}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <AuthenticatedRoute
                path="/e-learning"
                exact
                component={ELearning}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <AuthenticatedRoute
                path="/profile"
                exact
                component={Profile}
                appProps={{ isAuthenticated: isLoggedIn }}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
