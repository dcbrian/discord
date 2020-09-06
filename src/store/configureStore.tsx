import React, { createContext, useContext, useReducer, FC, ReactNode } from 'react';
import reducer from './reducer';
import { ContextProps, StateType } from './models';

const StoreContext = createContext<ContextProps>({} as ContextProps);

interface Props {
    // eslint-disable-next-line @typescript-eslint/ban-types
    initial: StateType | Object;
    children: ReactNode;
}
export const StoreProvider: FC<Props> = (props: Props) => {
    const { initial } = props;
    const [state, dispatch] = useReducer(reducer, initial);
    const value: ContextProps = { state, dispatch };

    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
};

export const useStore = (): ContextProps => useContext(StoreContext);
