import { AppBar, Badge, Button, Hidden, IconButton, Theme, Toolbar } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import useUser from 'src/contexts/user/actions';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    title: {
        margin: 'auto 0'
        // marginLeft: theme.spacing(1)
    },
    logoutButton: {
        marginLeft: theme.spacing(1)
    },
    logoutIcon: {
        marginRight: theme.spacing(1)
    }
}));

interface TopBarProps {
    className: string;
    onSidebarOpen: () => void;
}
const Topbar: FC<TopBarProps> = (props: TopBarProps) => {
    const { className, onSidebarOpen, ...rest } = props;

    const classes = useStyles();
    const { logout } = useUser();

    const [notifications] = useState([]);

    return (
        <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <Hidden mdUp>
                    <IconButton color="inherit" onClick={onSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <h2 className={classes.title}>#Server</h2>
                <div className={classes.flexGrow} />

                <Hidden smDown>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <Button className={classes.logoutButton} color="inherit" onClick={logout}>
                        <InputIcon className={classes.logoutIcon} />
                        Sign out
                    </Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
