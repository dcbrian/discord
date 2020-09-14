import React, { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { ContextProps, UserContextProps, UserType } from './models';
import reducer from './reducers/reducer';
import userReducer from './reducers/userReducer';

// ******** Store *********
// ********       *********
// ******* Provider *******
const StoreContext = createContext<ContextProps>({} as ContextProps);

interface StoreProps {
    children: ReactNode;
}
export const StoreProvider: FC<StoreProps> = (props: StoreProps) => {
    const initial = { channels: [] };
    const [state, dispatch] = useReducer(reducer, initial);
    const value: ContextProps = { state, dispatch };

    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
};

export const useStoreContext = (): ContextProps => useContext(StoreContext);

// ********* User *********
// ********       *********
// ******* Provider *******

const UserContext = createContext<UserContextProps>({} as UserContextProps);

interface UserProviderProps {
    // eslint-disable-next-line @typescript-eslint/ban-types
    initialUser: UserType | Object;
    children: ReactNode;
}
export const UserProvider: FC<UserProviderProps> = (props: UserProviderProps) => {
    const { initialUser } = props;

    const [state, dispatch] = useReducer(userReducer, initialUser);
    const value: UserContextProps = { state, dispatch };

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextProps => useContext(UserContext);
