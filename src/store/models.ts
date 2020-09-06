export interface ContextProps {
    state: Partial<StateType>;
    dispatch: (action: Action) => void;
}

export interface StateType {
    user: firebase.User;
}

export type Action = { type: string; payload?: any };
