import { effectLogin, effectLogout } from './effects';
import { State, Action } from './models';

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            effectLogin(action);
            return { ...state, user: { uuid: action.payload } };

        case 'LOGOUT':
            effectLogout();
            return { ...state, user: undefined };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default reducer;
