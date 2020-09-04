import React, { Fragment, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';

const AuthGuard: FC<Props> = (props: Props) => {
    const { /* roles,*/ children } = props;

    const session = { loggedIn: false, user: {} };

    const history = useHistory();

    useEffect(() => {
        if (!session.loggedIn || !session.user) {
            console.log('passe');
            history.push('/auth/login');
        }
    }, [history]);

    return <Fragment>{children}</Fragment>;
};

interface Props {
    roles: string[]; // Example of user roles: ['GUEST', 'USER', 'ADMIN'];
    children: React.ReactNode;
}

export default AuthGuard;
