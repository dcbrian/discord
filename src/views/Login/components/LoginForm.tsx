import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Theme } from '@material-ui/core';

// const schema = {
//     email: {
//         presence: { allowEmpty: false, message: 'is required' },
//         email: true
//     },
//     password: {
//         presence: { allowEmpty: false, message: 'is required' }
//     }
// };

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1)
        }
    },
    submitButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    }
}));

interface LoginFormProps {
    className?: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoginForm = (props: LoginFormProps) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <form
            {...rest}
            className={clsx(classes.root, className)}
            // onSubmit={handleSubmit}
        >
            <div className={classes.fields}>
                <TextField
                    // error={hasError('email')}
                    fullWidth
                    // helperText={hasError('email') ? formState.errors.email[0] : null}
                    label="Email address"
                    name="email"
                    // onChange={handleChange}
                    // value={formState.values.email || ''}
                    variant="outlined"
                />
                <TextField
                    // error={hasError('password')}
                    fullWidth
                    // helperText={hasError('password') ? formState.errors.password[0] : null}
                    label="Password"
                    name="password"
                    // onChange={handleChange}
                    type="password"
                    // value={formState.values.password || ''}
                    variant="outlined"
                />
            </div>
            <Button
                className={classes.submitButton}
                color="secondary"
                // disabled={!formState.isValid}
                disabled
                size="large"
                type="submit"
                variant="contained">
                Sign in
            </Button>
        </form>
    );
};

export default LoginForm;
