import React from 'react';
import { matchPath, useLocation, RouteProps } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { List, Typography, Theme } from '@material-ui/core';
import NavigationListItem from './components/NavigationListItem';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // marginBottom: theme.spacing(3)
    },
    list: {
        padding: 0
    }
}));

interface NavigationListProps {
    depth: number;
    pages: any[];
    location: RouteProps['location'];
}
const NavigationList = (props: NavigationListProps) => {
    const { pages, ...rest } = props;
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {pages.reduce((items, page) => reduceChildRoutes({ items, page, ...rest }), [])}
        </List>
    );
};

const reduceChildRoutes = (props: any) => {
    const { location, items, page, depth } = props;

    if (page.children) {
        const open = matchPath(location.pathname, {
            path: page.href,
            exact: false
        });

        items.push(
            <NavigationListItem
                depth={depth}
                icon={page.icon}
                key={page.title}
                label={page.label}
                open={true}
                title={page.title}>
                <NavigationList depth={depth + 1} pages={page.children} location={location} />
            </NavigationListItem>
        );
    } else {
        items.push(
            <NavigationListItem
                depth={depth}
                href={page.href}
                icon={page.icon}
                key={page.title}
                label={page.label}
                title={page.title}
            />
        );
    }

    return items;
};

interface NavigationProps {
    className?: string;
    component: any;
    pages: any[];
    title?: string;
}
const Navigation = (props: NavigationProps) => {
    const { title, pages, className, component: Component, ...rest } = props;

    const classes = useStyles();
    const location = useLocation();

    return (
        <Component {...rest} className={clsx(classes.root, className)}>
            {title && <Typography variant="overline">{title}</Typography>}
            <NavigationList depth={0} pages={pages} location={location} />
        </Component>
    );
};

Navigation.defaultProps = {
    component: 'nav'
};

export default Navigation;
