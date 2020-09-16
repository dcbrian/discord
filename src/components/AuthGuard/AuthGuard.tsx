import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from 'src/contexts/user/actions';

interface GuardProps {
    guarded: boolean;
    children: React.ReactNode;
}

const AuthGuard: FC<GuardProps> = (props: GuardProps) => {
    const { guarded, children } = props;

    const history = useHistory();

    const { user } = useUser();

    useEffect(() => {
        if (guarded && !user) {
            history.push('/auth/login');
        } else if (!guarded && user) {
            history.push('/presentation');
        }
    }, [history, user, guarded]);

    return <>{children}</>;
};

export default AuthGuard;
