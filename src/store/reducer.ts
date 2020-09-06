import { effectLogin, effectLogout } from './effects';
import { StateType, Action } from './models';

const reducer = (state: Partial<StateType>, action: Action): Partial<StateType> => {
    switch (action.type) {
        case 'LOGIN':
            effectLogin(action);
            return {
                ...state,
                user: action.payload
            };

        case 'LOGOUT':
            effectLogout();
            return { ...state, user: undefined };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default reducer;
