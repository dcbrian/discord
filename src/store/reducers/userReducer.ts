import { Action, UserType } from '../models';

const userReducer = (state: Partial<UserType>, action: Action): Partial<UserType> => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            };

        case 'LOGOUT':
            return { user: undefined };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default userReducer;
