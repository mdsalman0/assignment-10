import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-contain-center'>
            <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;