import React, { FC } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import { StoreProvider } from './store/configureStore';
import { ThemeProvider } from '@material-ui/core';
import { ScrollReset } from './components';
import { StateType } from './store/models';
import routes from './routes';
import theme from './theme';
import './assets/scss/index.scss';

const history = createBrowserHistory();

const initialize = (): Partial<StateType> => {
    const cache = localStorage.getItem('user');

    if (cache) {
        return { user: JSON.parse(cache) };
    } else return {};
};

const App: FC = () => {
    const initialState = initialize();

    return (
        <StoreProvider initial={initialState}>
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
