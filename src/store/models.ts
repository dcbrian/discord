export interface ContextProps {
    state: State;
    dispatch: (action: Action) => void;
}

export interface State {
    loggedIn?: boolean;
    user?: {
        uuid?: string;
        email?: string;
        avatar?: string;
        role?: string;
    };
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Action = { type: string; payload?: string };

export const initialState: State = {
    loggedIn: true,
    user: {
        uuid: 'sdgsg54',
        email: 'test@gmail.com',
        avatar: '/images/avatars/avatar_11.png',
        role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
    }
};
