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
        login: (user: firebase.User | undefined) => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: 'LOGIN', payload: user });
        },
        logout: () => {
            localStorage.removeItem('user');
            dispatch({ type: 'LOGOUT', payload: undefined });
        }
    };
};

export default useUser;
