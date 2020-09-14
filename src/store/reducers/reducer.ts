import { Action, StateType } from '../models';

const reducer = (state: Partial<StateType>, action: Action): Partial<StateType> => {
    switch (action.type) {
        case 'ADD_TYPES':
            const types = state.types ? [...state.types] : [];
            types.push(action.payload);
            return {
                ...state,
                types: types
            };
        case 'SET_TYPES':
            return {
                ...state,
                types: action.payload
            };
        case 'SET_CHANNELS':
            return {
                ...state,
                channels: action.payload
            };

        case 'ADD_CHANNELS':
            const res = state.channels ? [...state.channels] : [];
            res.push(action.payload);

            return {
                ...state,
                channels: res
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default reducer;
