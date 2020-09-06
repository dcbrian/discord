/* eslint-disable @typescript-eslint/ban-types */
import { useStore } from '../configureStore';

const useUser = (): {
    user: firebase.User | undefined;
    login: (user: firebase.User | undefined) => void;
    logout: () => void;
} => {
    const { state, dispatch } = useStore();
    return {
        user: state.user,
        login: (user: firebase.User | undefined) => dispatch({ type: 'LOGIN', payload: user }),
        logout: () => dispatch({ type: 'LOGOUT', payload: undefined })
    };
};

export default useUser;
