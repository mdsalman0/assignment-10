import React from 'react';
import not from '../../../Image/notFound.png';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={not} alt="" />
        </div>
    );
};

export default NotFound;