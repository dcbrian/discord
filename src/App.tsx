import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { StoreProvider } from './store/configureStore';
import { ThemeProvider } from '@material-ui/core';
import { ScrollReset } from './components';
import routes from './routes';
import theme from './theme';
import './assets/scss/index.scss';

const history = createBrowserHistory();

const App: FC = () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <ScrollReset />
                    {/* <GoogleAnalytics /> */}
                    {/* <CookiesNotification /> */}
                    {renderRoutes(routes)}
                </Router>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
