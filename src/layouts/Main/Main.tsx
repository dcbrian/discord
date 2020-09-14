import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, Suspense, useState } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Switch } from 'react-router-dom';
import RessourceLoader from 'src/components/RessourceLoader';
import useUser from 'src/store/hooks/useUser';
import AuthGuard from '../../components/AuthGuard';
import { SideBar, TopBar } from './components';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    topBar: {
        // zIndex: 2,
        position: 'relative'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    sideBar: {
        zIndex: 3,
        width: 256,
        minWidth: 256,
        flex: '0 0 auto'
    },
    content: {
        overflowY: 'auto',
        flex: '1 1 auto'
    }
}));

const Main: FC<RouteConfigComponentProps> = (props: RouteConfigComponentProps) => {
    const { route } = props;

    const classes = useStyles();

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };
    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const { user } = useUser();

    return (
        <AuthGuard guarded={true}>
            <RessourceLoader>
                <div className={classes.root}>
                    <SideBar
                        className={classes.sideBar}
                        onSidebarClose={handleSidebarClose}
                        openSidebar={openSidebar}
                    />
                    <div className={classes.container}>
                        <TopBar className={classes.topBar} onSidebarOpen={handleSidebarOpen} />
                        <main className={classes.content}>
                            <Switch>
                                <Suspense fallback={<LinearProgress />}>
                                    {renderRoutes(route?.routes)}
                                </Suspense>
                            </Switch>
                        </main>
                    </div>
                </div>
            </RessourceLoader>
        </AuthGuard>
    );
};

export default Main;
