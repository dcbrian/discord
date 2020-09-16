import React, { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { UserContextProps, UserType } from './userContextModels';
import userReducer from './userReducer';

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface UserProviderProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    initial: UserType | Object;
    children: ReactNode;
}
export const UserProvider: FC<UserProviderProps> = (props: UserProviderProps) => {
    const { initial, children } = props;

    const [state, dispatch] = useReducer(userReducer, initial);
    const value: UserContextProps = { state, dispatch };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextProps => useContext(UserContext);
