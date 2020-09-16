import { Avatar, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useUser from 'src/contexts/user/actions';

interface Props {
    className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    avatar: {
        // flexGrow: 1,
        // width: 40,
        height: 'auto'
    },
    info: {
        // display: 'flex',
        // flexGrow: 1,
        paddingLeft: theme.spacing(1)
        // flexDirection: 'column',
        // justifyContent: 'center'
    },
    text: {
        // lineHeight: 'normal'
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
