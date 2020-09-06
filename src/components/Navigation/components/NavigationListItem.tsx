import React, { useState, forwardRef, FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { ListItem, Button, Collapse, colors, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface LinkProps {
    children?: React.ReactNode;
    active: string;
    to: any;
}
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
    item: {
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0
    },
    itemLeaf: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%'
    },
    buttonLeaf: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightRegular,
        '&.depth-0': {
            fontWeight: theme.typography.fontWeightMedium
        }
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
    label: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    active: {
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
    depth: number;
    href?: string;
    icon?: FC<any>;
    label?: FC;
    open?: boolean;
    title: string;
}

const NavigationListItem: FC<NavigationListItemProps> = (props: NavigationListItemProps) => {
    const {
        title,
        href,
        depth,
        children,
        icon: Icon,
        className,
        open: openProp,
        label: Label,
        ...rest
    } = props;

    const classes = useStyles();
    console.log(openProp);
    const [open, setOpen] = useState(openProp);

    const handleToggle = () => {
        setOpen((open) => !open);
    };

    let paddingLeft = 8;

    if (depth > 0) {
        paddingLeft = 32 + 8 * depth;
    }

    const style = {
        paddingLeft
    };

    if (children) {
        return (
            <ListItem {...rest} className={clsx(classes.item, className)} disableGutters>
                <Button className={classes.button} onClick={handleToggle} style={style}>
                    {Icon && <Icon className={classes.icon} />}
                    {title}
                    {open ? (
                        <ExpandLessIcon className={classes.expandIcon} color="inherit" />
                    ) : (
                        <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
                    )}
                </Button>
                <Collapse in={open}>{children}</Collapse>
            </ListItem>
        );
    } else {
        return (
            <ListItem {...rest} className={clsx(classes.itemLeaf, className)} disableGutters>
                <Button
                    style={style}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    component={CustomRouterLink}
                    active={classes.active}
                    to={href}>
                    {Icon && <Icon className={classes.icon} />}
                    {title}
                    {Label && (
                        <span className={classes.label}>
                            <Label />
                        </span>
                    )}
                </Button>
            </ListItem>
        );
    }
};

NavigationListItem.defaultProps = {
    depth: 0,
    open: false
} as Partial<NavigationListItemProps>;

export default NavigationListItem;
