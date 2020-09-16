import { useStoreContext } from '../store/configStoreContext';
import { useUserContext } from './configUserContext';

const useUser = (): {
    user: firebase.User | undefined;
    login: (user: firebase.User | undefined) => void;
    logout: () => void;
} => {
    const { state, dispatch: dispatch_user } = useUserContext();
    const { dispatch: dispatch_store } = useStoreContext();

    return {
        user: state?.user,
        login: (user: firebase.User | undefined) => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch_user({ type: 'LOGIN', payload: user });
        },
        logout: () => {
            localStorage.removeItem('user');
            // Empty User context
            dispatch_user({ type: 'LOGOUT', payload: undefined });

            // Empty Store context
            dispatch_store({ type: 'RESET', payload: undefined });
        }
    };
};

export default useUser;
