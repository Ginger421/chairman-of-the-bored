import React from 'react';

const UserApi = (props) => {
    return (
        <div className='z-10 flex justify-center items-center content-center h-screen'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg'>

                <h1 className='flex p-10 text-4xl text-center'>What are you going to do today? </h1>
            
                <button className='bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-4 flex items-center hover:text-sky-400'>Tell Me!</button>

            </div>
        </div>
    )
}

const GenericApi = (props) => {
    return (
        <div className='z-10 flex justify-center items-center content-center'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg'>

                <h1 className='flex p-10 text-4xl text-center'>What are you going to do today? </h1>
            
                <button className='bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-4 flex items-center hover:text-sky-400'>Tell Me!</button>

            </div>
        </div>
    )
    
}

const BoredApi = (props) => {
    const LoggedIn = props.LoggedIn
    if (LoggedIn) {
        return (
            <UserApi/>
        )
    } else {
        return (
            <GenericApi/>
        )
    }
}

export default BoredApi;