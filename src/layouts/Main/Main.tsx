import React, { Suspense, FC, useState } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AuthGuard from '../../components/AuthGuard';
import { TopBar, SideBar } from './components';

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
    return (
        <AuthGuard guarded={true}>
            <div className={classes.root}>
                <SideBar
                    className={classes.sideBar}
                    onSidebarClose={handleSidebarClose}
                    openSidebar={openSidebar}
                />
                <div className={classes.container}>
                    <TopBar className={classes.topBar} onSidebarOpen={handleSidebarOpen} />
                    <main className={classes.content}>
                        <Suspense fallback={<LinearProgress />}>
                            {renderRoutes(route?.routes)}
                        </Suspense>
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
};

export default Main;
