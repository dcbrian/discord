import { Action } from './models';

export const effectLogin = (action: Action): void => {
    localStorage.setItem('user', JSON.stringify(action.payload));
};

export const effectLogout = (): void => {
    localStorage.removeItem('user');
};
