import { SvgIconProps } from '@material-ui/core';

export interface ContextProps {
    state: Partial<StateType>;
    dispatch: (action: Action) => void;
}

export interface ChannelType {
    messages: string[];
    title: string;
    type: number;
    key: string;
}

export interface Type {
    label: string;
    icon: (props: SvgIconProps) => JSX.Element;
}
export interface StateType {
    types: Type[];
    channels: ChannelType[];
}

export type Action = { type: string; payload?: any };
