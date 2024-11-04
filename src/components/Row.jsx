import React from 'react';

const Row = ({ children, className = '' }) => (
    <div className={`flex ${className}`}>{children}</div>
);

export default Row;
