import React, { FC } from 'react';
import { makeStyles, Theme, Divider, Typography } from '@material-ui/core';
import clsx from 'clsx';

interface Props {
    className?: string;
    spacing: number;
    label: string;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
    root: (props) => ({
        display: 'flex',
        alignItems: 'center',
        margin: `${theme.spacing(props.spacing)}px 0px`
    }),
    label: {
        margin: `0px ${theme.spacing(2)}px`
    },
    divider: {
        flexGrow: 1
    }
}));

const Spacer: FC<Props> = (props: Props) => {
    const { className, label } = props;
    const classes = useStyles(props);

    return (
        <div className={clsx(`${classes.root}`, className)}>
            <Divider className={classes.divider} />
            <Typography className={classes.label} variant="body1">
                {label}
            </Typography>
            <Divider className={classes.divider} />
        </div>
    );
};

export default Spacer;
