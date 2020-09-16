import React from 'react';
import './Spinner.scss';

export const Spinner = (): JSX.Element => {
    return (
        <div className="semipolar-spinner">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
        </div>
    );
};
