import React, { Suspense, FC } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { LinearProgress, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthGuard } from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        height: '100%',
        paddingTop: 56,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    }
}));

const Auth: FC<RouteConfigComponentProps> = (props: RouteConfigComponentProps) => {
    const { route } = props;

    const classes = useStyles();

    return (
        <AuthGuard guarded={false}>
            {/* <Topbar /> */}
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress />}>
                    {renderRoutes(route?.routes)}
                </Suspense>
            </main>
        </AuthGuard>
    );
};

export default Auth;
