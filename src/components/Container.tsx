import React, { PropsWithChildren } from 'react';

interface Props {
    className?: string;
}

const Container: React.FC<PropsWithChildren<Props>> = ({ children, className = "" }) => (
    <div className={`w-full max-w-7xl mx-auto px-5 ${className}`}>
        {children}
    </div>
);

export default Container;