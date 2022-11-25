import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <button className="btn btn-primary border-0 bg-orange-700 hover:bg-stone-700 text-white font-bold">
            {children}
        </button>
    );
};

export default ButtonPrimary;