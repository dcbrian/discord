import { colors, Drawer, Hidden, /* Divider, */ Paper, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from 'src/components';
import useChannels from 'src/store/hooks/useChannels';
import useTypes from 'src/store/hooks/useTypes';
import { Type } from 'src/store/models';
import Profile from './components/Profile';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        padding: `${theme.spacing(3)}px 0px`,
        flexGrow: 1
    },
    profile: {
        backgroundColor: colors.grey['A400'],
        height: '64px',
        [theme.breakpoints.down('xs')]: {
            height: '56px'
        }
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
    const { channels } = useChannels();
    const { types } = useTypes();

    useEffect(() => {
        if (openSidebar) {
            onSidebarClose && onSidebarClose();
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    const navbarContent = (
        <div className={classes.container}>
            <Profile className={classes.profile}></Profile>

            <div className={classes.content}>
                <nav>
                    {types?.map((el: Type, i) => (
                        <Navigation
                            key={i}
                            component="div"
                            pages={channels?.filter((x) => x.type === i)}
                            label={el.label}
                            typeIcon={el.icon}
                        />
                    ))}
                </nav>
            </div>
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
                    <div
                        {...rest}
                        className={clsx(classes.root, className)}
                        style={{ flexGrow: 1 }}>
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
