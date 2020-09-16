import LanguageIcon from '@material-ui/icons/Language';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import React, { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { ContextProps } from './storeModels';
import reducer from './storeReducer';

const initial = {
    types: [
        { icon: LanguageIcon, label: 'public channels' },
        { icon: VpnLockIcon, label: 'private channels' },
        { icon: VpnLockIcon, label: 'direct messages' }
    ]
};

const StoreContext = createContext<ContextProps>({} as ContextProps);

interface StoreProps {
    children: ReactNode;
}
export const StoreProvider: FC<StoreProps> = (props: StoreProps) => {
    const [state, dispatch] = useReducer(reducer, initial);
    const value: ContextProps = { state, dispatch };

    return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
};

export const useStoreContext = (): ContextProps => useContext(StoreContext);
