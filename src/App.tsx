import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from '@material-ui/core';
import routes from './routes';
import theme from './theme';

const history = createBrowserHistory();

const App: FC<unknown> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        {/* <ScrollReset /> */}
        {/* <GoogleAnalytics /> */}
        {/* <CookiesNotification /> */}
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
};

export default App;
