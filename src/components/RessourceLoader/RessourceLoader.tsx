import React, { FC, useEffect } from 'react';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { channels$, fire$, userChannels$ } from 'src/base';
import useChannels from 'src/store/hooks/useChannels';
import useTypes from 'src/store/hooks/useTypes';
import useUser from 'src/store/hooks/useUser';
import getIcon from 'src/utils/icons';

interface Props {
    children?: React.ReactNode;
}

const RessourceLoader: FC<Props> = (props: Props) => {
    const { children } = props;
    const { user } = useUser();
    const { channels, addChannels } = useChannels();
    const { types, addTypes } = useTypes();

    useEffect(() => {
        const sub: Subscription[] = [];

        fire$('types')
            .pipe(flatMap(({ snapshot }): any => snapshot.val()))
            .subscribe((type: any) => {
                type.icon = getIcon(type.icon);
                addTypes(type);
            });

        userChannels$(user?.uid || '')
            .pipe(flatMap(({ snapshot }): string => snapshot.val()))
            .subscribe((key) => {
                // Save Subscription to unsubscribe on Destroy life cycle
                sub.push(
                    channels$(key).subscribe(({ snapshot }) => {
                        addChannels({ ...snapshot.val(), key: key });
                    })
                );
            });

        return () => {
            console.log('exit');
            sub.forEach((e: Subscription) => e.unsubscribe());
        };
    }, []);
    return types && channels ? (
        <>{children}</>
    ) : (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}>
            <span>LOADING DATA ...</span>
        </div>
    );
};

export default RessourceLoader;
