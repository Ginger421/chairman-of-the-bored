import React from 'react';

const BoredApi = () => {

    return (
        <div className='flex justify-center items-center content-center h-screen'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg'>

                <h1 className='flex p-10'>What are you going to do today? </h1>
            
                <button className='bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-4 flex items-center'>RANDOM</button>

            </div>
        </div>
    )
}

export default BoredApi;