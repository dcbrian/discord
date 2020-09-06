import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Typography, Divider, Link, Theme } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import gradients from '../../utils/gradients';
import LoginForm from './components/LoginForm';
import ProvidersButton from './components/ProvidersButton';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6, 2)
    },
    card: {
        width: '450px',
        maxWidth: '100%',
        overflow: 'unset',
        position: 'relative'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(8, 4, 3, 4)
    },
    icon: {
        backgroundImage: gradients.green,
        color: '#FFFFFF',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        position: 'absolute',
        top: -32,
        left: theme.spacing(3),
        height: 64,
        width: 64,
        fontSize: 32
    },
    loginForm: {
        marginTop: theme.spacing(2)
    },
    CustomButton: {
        marginTop: theme.spacing(0)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    person: {
        marginTop: theme.spacing(2),
        display: 'flex'
    },
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const Login: FC<unknown> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <LockIcon className={classes.icon} />
                    <Typography gutterBottom variant="h3">
                        Sign in
                    </Typography>
                    <Typography variant="subtitle2">
                        Sign in on the internal platform
                    </Typography>
                    <ProvidersButton className={classes.CustomButton} />
                    <LoginForm className={classes.loginForm} />
                    <Divider className={classes.divider} />
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/auth/register"
                        underline="always"
                        variant="subtitle2">
                        Don&apos;t have an account?
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
