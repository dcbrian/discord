import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6, 2)
    }
}));

const Channel: FC<unknown> = () => {
    const classes = useStyles();

    return <div className={classes.root}>server</div>;
};

export default Channel;
