import {
    Button,
    Collapse,
    colors,
    List,
    SvgIconProps,
    Theme,
    Typography
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { ChannelType } from 'src/store/models';
import NavigationListItem from './components/NavigationListItem';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginBottom: theme.spacing(3)
    },
    button: {
        color: colors.blueGrey[800],
        padding: `6px ${theme.spacing(2)}px`,
        justifyContent: 'space-between',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%'
    }
}));

interface NavigationProps {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
    pages?: ChannelType[];
    typeIcon: (props: SvgIconProps) => JSX.Element;
    label: string;
}
const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
    const { label, pages, typeIcon, className, component: Component, ...rest } = props;

    const [open, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen((open) => !open);
    };

    const classes = useStyles();

    return (
        <Component {...rest} className={clsx(classes.root, className)}>
            <Button className={classes.button} onClick={handleToggle}>
                <Typography variant="overline">{label}</Typography>
                {open ? (
                    <ExpandLessIcon color="inherit" />
                ) : (
                    <ExpandMoreIcon color="inherit" />
                )}
            </Button>

            <Collapse in={open}>
                <List>
                    {pages &&
                        pages.map((page) => (
                            <NavigationListItem
                                icon={typeIcon}
                                key={page.title}
                                title={page.title}
                                href={page.key}
                            />
                        ))}
                </List>
            </Collapse>
        </Component>
    );
};

Navigation.defaultProps = {
    component: 'nav'
};

export default Navigation;
