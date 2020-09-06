import React, { Fragment, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../../store/hooks/useUser';

const AuthGuard: FC<Props> = (props: Props) => {
    const { /* roles,*/ guarded, children } = props;

    const { user } = useUser();

    const history = useHistory();

    useEffect(() => {
        if (guarded && !user) {
            history.push('/auth/login');
        } else if (!guarded && user) {
            history.push('/presentation');
        }
    }, [history, user, guarded]);

    return <Fragment>{children}</Fragment>;
};

interface Props {
    guarded: boolean;
    roles?: string[]; // Example of user roles: ['GUEST', 'USER', 'ADMIN'];
    children: React.ReactNode;
}

export default AuthGuard;
