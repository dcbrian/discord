import { useStore } from '../configureStore';
import { State } from '../models';

const useUser = (): { state: State; login: (user: string) => void; logout: () => void } => {
    const { state, dispatch } = useStore();
    return {
        state: state,
        login: (user: string) => dispatch({ type: 'LOGIN', payload: user }),
        logout: () => dispatch({ type: 'LOGOUT', payload: undefined })
    };
};

export default useUser;
