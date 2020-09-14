import { Card, CardContent, Divider, Link, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Spacer } from 'src/components';
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
        padding: theme.spacing(4, 4, 3, 4)
    },
    CustomButton: {
        marginTop: theme.spacing(3)
    },
    divider: {
        margin: theme.spacing(2, 0),
        flexGrow: 1
    },
    spacer: {
        display: 'flex',
        alignItems: 'center'
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
                    <Typography gutterBottom variant="h3" align="center">
                        Sign in
                    </Typography>

                    <ProvidersButton className={classes.CustomButton} />
                    <Spacer label={'OR'} spacing={3} />
                    <LoginForm />

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
