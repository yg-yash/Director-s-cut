import React from 'react';
//mui
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './app/utils/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './app/store';
import './App.css';
import Login from './app/components/Auth/Login/';
import SignUp from './app/components/Auth/Signup';
import ForgetPassword from './app/components/Auth/ForgetPassword';
import Dashboard from './app/components/CastingDirectorPanel/Dashboard';
import Navbar from './app/components/UI/Navbar';
import UserPortfolioList from './app/components/CastingDirectorPanel/UserPortfolioList';
import UserPortfolio from './app/components/CastingDirectorPanel/UserPortfolioList/UserPortfolio';
import PageNotFound from './app/components/UI/PageNotFound';
const { persistor, store } = configureStore();

const theme = createMuiTheme(themeFile);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Router>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/forget" component={ForgetPassword} />
                  <Route
                    path="/portfolios"
                    exact
                    component={UserPortfolioList}
                  />
                  <Route
                    path="/portfolios/:id"
                    exact
                    component={UserPortfolio}
                  />
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/" component={PageNotFound} />
                </Switch>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
