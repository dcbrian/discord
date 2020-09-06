import React, { useEffect, FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, /* Divider, */ Paper, Avatar, Typography, Theme } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import useUser from '../../../../store/hooks/useUser';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
        overflowY: 'auto'
    },
    content: {
        padding: theme.spacing(2)
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    }
}));
interface SideBarProps {
    openSidebar: boolean;
    onSidebarClose: () => void;
    className: string;
}
const SideBar: FC<SideBarProps> = (props: SideBarProps) => {
    const { openSidebar, onSidebarClose, className, ...rest } = props;

    const classes = useStyles();
    const location = useLocation();
    const { user } = useUser();
    useEffect(() => {
        if (openSidebar) {
            onSidebarClose && onSidebarClose();
        }
    }, [location.pathname, openSidebar, onSidebarClose]);

    const navbarContent = (
        <div className={classes.content}>
            <div className={classes.profile}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    component={RouterLink}
                    src={user?.photoURL ? user?.photoURL : ''}
                    to="/profile/1/timeline"
                />

                <Typography className={classes.name} variant="h4">
                    {user?.displayName}
                </Typography>
                {/* <Typography variant="body2">{user?.bio}</Typography> */}
            </div>
            {/* 
          <Divider className={classes.divider} />
          <nav className={classes.navigation}>
            {navigationConfig.map(list => (
              <Navigation
                component="div"
                key={list.title}
                pages={list.pages}
                title={list.title}
              />
            ))}
          </nav>
    */}
        </div>
    );

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    anchor="left"
                    onClose={onSidebarClose}
                    open={openSidebar}
                    variant="temporary">
                    <div {...rest} className={clsx(classes.root, className)}>
                        {navbarContent}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Paper
                    {...rest}
                    className={clsx(classes.root, className)}
                    elevation={1}
                    square>
                    {navbarContent}
                </Paper>
            </Hidden>
        </>
    );
};

export default SideBar;
