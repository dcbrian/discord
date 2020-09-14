import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../../store/hooks/useUser';

interface GuardProps {
    guarded: boolean;
    roles?: string[]; // Example of user roles: ['GUEST', 'USER', 'ADMIN'];
    children: React.ReactNode;
}

const AuthGuard: FC<GuardProps> = (props: GuardProps) => {
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

    console.log('auth');
    return <>{children}</>;
};

export default AuthGuard;
