import { Button, colors, ListItem, SvgIconProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, forwardRef } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';

type LinkProps = {
    children?: React.ReactNode;
    active: string;
} & NavLinkProps;

// eslint-disable-next-line react/display-name
const CustomRouterLink = forwardRef<HTMLDivElement, LinkProps>((props: LinkProps, ref) => {
    const { active, ...rest } = props;
    return (
        <div ref={ref} style={{ flexGrow: 1 }}>
            <RouterLink activeClassName={active} exact {...rest} />
        </div>
    );
});

const useStyles = makeStyles((theme: Theme) => ({
    itemLeaf: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    buttonLeaf: {
        color: colors.blueGrey[800],
        padding: '6px 0px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        borderRadius: 0,
        fontWeight: theme.typography.fontWeightRegular
    },
    icon: {
        color: /*theme.palette.icon*/ '#FFFFF',
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    expandIcon: {
        marginLeft: 'auto',
        height: 16,
        width: 16
    },
    active: {
        backgroundColor: 'lightgrey',
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    }
}));

interface NavigationListItemProps {
    children?: React.ReactNode;
    className?: string;
    title: string;
    href: string;
    icon?: (props: SvgIconProps) => JSX.Element;
}

const NavigationListItem: FC<NavigationListItemProps> = (props: NavigationListItemProps) => {
    const { title, href, icon: Icon, className, ...rest } = props;

    const classes = useStyles();

    const style = {
        paddingLeft: 16
    };

    return (
        <ListItem {...rest} className={clsx(classes.itemLeaf, className)} disableGutters>
            <Button
                style={style}
                className={classes.buttonLeaf}
                component={CustomRouterLink}
                active={classes.active}
                to={'/server/' + href}>
                {Icon && <Icon fontSize="small" className={classes.icon} />}
                {title}
            </Button>
        </ListItem>
    );
};

export default NavigationListItem;
