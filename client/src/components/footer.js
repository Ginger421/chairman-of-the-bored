import React from 'react';

const Footer = ({
    ...otherProps
}) => {
    return (
        <footer className='bg-fuchsia-700'>
            <div className='w-full max-w-7xl mx-auto p-0.5'>
               <span className='text-base text-white'>
                Chairman of the Bored 2022
                </span> 
            </div>
        </footer>
    )
};


export default Footer;
