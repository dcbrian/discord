import React, { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { ContextProps } from './storeModels';
import reducer from './storeReducer';

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
