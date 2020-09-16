import { Action } from '../store/storeModels';

export interface UserContextProps {
    state: Partial<UserType>;
    dispatch: (action: Action) => void;
}
export interface UserType {
    user: firebase.User;
}
