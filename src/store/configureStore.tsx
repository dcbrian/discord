import React, { createContext, useContext, useReducer, FC, ReactNode } from 'react';
import reducer from './reducer';
import { ContextProps, initialState } from './models';

// eslint-disable-next-line @typescript-eslint/ban-types
const StoreContext = createContext<ContextProps>({} as ContextProps);

interface Props {
    children: ReactNode;
}
export const StoreProvider: FC<Props> = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value: ContextProps = { state, dispatch };

    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
};

export const useStore = (): ContextProps => useContext(StoreContext);

// : <Partial<Context>, Dispatch<Action> >
