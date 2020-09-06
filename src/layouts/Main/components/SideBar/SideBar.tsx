import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Drawer,
    /* Divider, */ Paper,
    Theme,
    AppBar,
    Toolbar,
    Divider
} from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import Navigation from 'components/Navigation';
import navigationConfig from './navigationConfig';
import Profile from './components/Profile';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    content: {
        padding: theme.spacing(2),
        flexGrow: 1
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },

    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    },
    logo: {
        height: '40px'
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
    useEffect(() => {
        if (openSidebar) {
            onSidebarClose && onSidebarClose();
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    const navbarContent = (
        <div className={classes.root}>
            <AppBar style={{ position: 'relative' }} color="secondary">
                <Toolbar></Toolbar>
            </AppBar>
            <div className={classes.content}>
                <nav>
                    {navigationConfig.map((list, i) => (
                        <Navigation
                            component="div"
                            key={i}
                            pages={list.pages}
                            title={list.title}
                        />
                    ))}
                </nav>
            </div>
            <Divider className={classes.divider} />
            <Profile></Profile>
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
