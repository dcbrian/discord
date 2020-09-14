import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import firebaseApp from 'src/base';
import useUser from '../../../store/hooks/useUser';
import flogo from './../../../assets/logo/f_logo.svg';
import glogo from './../../../assets/logo/g_logo.svg';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            textTransform: 'none',
            flexGrow: 1,
            flexBasis: 0,
            margin: theme.spacing(1)
        },
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            '& > *': {
                flex: '0 0 100%',
                margin: `${theme.spacing(1)}px 0`
            }
        }
    },
    button: {
        padding: theme.spacing(1)
    },
    fb: {
        boxShadow: 'none'
    },
    img: {
        height: '17px',
        width: 'auto',
        marginRight: '0.5rem'
    }
}));

interface ProvidersButtonProps {
    className?: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProvidersButton = (props: ProvidersButtonProps) => {
    const { className, ...rest } = props;

    const classes = useStyles();
    const { login } = useUser();

    const authenticate = () => {
        firebaseApp
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => login(result?.user ? result.user : undefined))
            .catch((error) => console.log(error));
    };

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Button
                className={clsx(classes.button, classes.fb)}
                variant="contained"
                color="primary"
                disableElevation
                onClick={authenticate}>
                <img className={classes.img} alt="facebook" src={flogo} />

                <span>Facebook</span>
            </Button>

            <Button
                className={classes.button}
                variant="outlined"
                disableElevation
                onClick={authenticate}>
                <img className={classes.img} alt="google" src={glogo} />

                <span>Google</span>
            </Button>
        </div>
    );
};

export default ProvidersButton;
