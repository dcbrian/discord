/* eslint-disable @typescript-eslint/ban-types */
import { useStoreContext } from '../configureStore';
import { ChannelType } from '../models';

interface props {
    channels: ChannelType[] | undefined;
    addChannels: (update: ChannelType[] | undefined) => void;
}

const useChannels = (): props => {
    const { state, dispatch } = useStoreContext();

    return {
        channels: state.channels,
        addChannels: (update: ChannelType[] | undefined): void => {
            dispatch({ type: 'ADD_CHANNELS', payload: update });
        }
    };
};

export default useChannels;
