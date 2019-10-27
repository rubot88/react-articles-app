import React from 'react';
import error from '../error.png';

const ErrorMessage = () => {
    const styleError = {
        width:'fit-content',
        margin: '0 auto'
    }
    return (
        <div style = {styleError}>
            <img src={error} alt="Error" />
        </div>
    )
}

export default ErrorMessage;