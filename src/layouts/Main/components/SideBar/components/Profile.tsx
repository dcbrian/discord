import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useUser from 'store/hooks/useUser';
import clsx from 'clsx';

interface Props {
    className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'stretch',
        minHeight: 'fit-content',
        padding: theme.spacing(2)
        // padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    avatar: {
        width: 40,
        height: 40
    },
    info: {
        display: 'flex',
        flexGrow: 1,
        paddingLeft: theme.spacing(1),
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        lineHeight: 'normal'
    }
}));

const Profile: FC<Props> = (props: Props) => {
    const { className } = props;
    const { user } = useUser();
    const classes = useStyles();

    return (
        <div className={clsx(className, classes.root)}>
            <Avatar
                alt="Person"
                className={classes.avatar}
                component={RouterLink}
                src={user?.photoURL ? user?.photoURL : ''}
                to="/profile/1/timeline"
            />
            <div className={classes.info}>
                <Typography className={classes.text} variant="h6">
                    {user?.displayName}
                </Typography>
                <Typography className={classes.text} variant="body2">
                    #123456
                </Typography>
            </div>
        </div>
    );
};

export default Profile;
