import { ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import React, { FC } from 'react';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import './assets/scss/index.scss';
import { ScrollReset } from './components';
import routes from './routes';
import { StoreProvider, UserProvider } from './store/configureStore';
import { UserType } from './store/models';
import theme from './theme';

const history = createBrowserHistory();

const initialize = (): Partial<UserType> => {
    const cache = localStorage.getItem('user');

    if (cache) {
        return { user: JSON.parse(cache) };
    } else return {};
};

const App: FC = () => {
    const initialUser = initialize();

    return (
        <UserProvider initialUser={initialUser}>
            <StoreProvider>
                <ThemeProvider theme={theme}>
                    <Router history={history}>
                        <ScrollReset />

                        {renderRoutes(routes)}
                    </Router>
                </ThemeProvider>
            </StoreProvider>
        </UserProvider>
    );
};

export default App;
