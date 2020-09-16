import React, { FC, useEffect } from 'react';
import { Subject } from 'rxjs';
import { filter, flatMap, takeUntil } from 'rxjs/operators';
import { channels$, userChannels$ } from 'src/base';
import useChannels from 'src/contexts/hooks/useChannels';
import useTypes from 'src/contexts/hooks/useTypes';
import useUser from 'src/contexts/user/actions';
import { Spinner } from '../Spinner/Spinner';

interface Props {
    children?: React.ReactNode;
}

const RessourceLoader: FC<Props> = (props: Props) => {
    const { children } = props;
    const { user } = useUser();
    const { channels, addChannels } = useChannels();
    const { types } = useTypes();

    // eslint-disable-next-line
    useEffect(() => {
        const destroy$ = new Subject();

        userChannels$(user?.uid || '')
            .pipe(
                flatMap(({ snapshot }): string => snapshot.val()),
                filter((x: string) => !channels?.some((c) => c.key === x) || false),
                takeUntil(destroy$)
            )
            .subscribe((key) => {
                channels$(key).subscribe(({ snapshot }) => {
                    addChannels({ ...snapshot.val(), key: key });
                });
            });

        return () => {
            destroy$.next();
            destroy$.complete();
        };
    }, [channels]);

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
            {/* <span>LOADING DATA ...</span> */}
            <Spinner></Spinner>
        </div>
    );
};

export default RessourceLoader;
