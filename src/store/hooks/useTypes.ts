/* eslint-disable @typescript-eslint/ban-types */
import { useStoreContext } from '../configureStore';
import { Type } from '../models';

interface props {
    types: Type[] | undefined;
    addTypes: (update: Type[] | undefined) => void;
}

const useTypes = (): props => {
    const { state, dispatch } = useStoreContext();

    return {
        types: state.types,
        addTypes: (update: Type[] | undefined): void => {
            dispatch({ type: 'ADD_TYPES', payload: update });
        }
    };
};

export default useTypes;
