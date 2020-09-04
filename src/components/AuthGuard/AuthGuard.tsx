import React, { Fragment, useEffect, FC } from 'react';
import useRouter from './../../utils/useRouter';

const AuthGuard: FC<Props> = (props: Props) => {
  const { /* roles,*/ children } = props;

  const session = { loggedIn: false, user: {} };

  const router = useRouter();

  useEffect(() => {
    if (!session.loggedIn || !session.user) {
      router.history.push('/auth/login');
      return;
    }

    // if (!roles.includes(session.user.role)) {
    //   router.history.push('/errors/error-401');
    // }
  }, [router]);

  return <Fragment>{children}</Fragment>;
};

interface Props {
  roles: string[]; // Example of user roles: ['GUEST', 'USER', 'ADMIN'];
  children: React.ReactNode;
}

export default AuthGuard;
