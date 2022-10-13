import React from 'react';
import Results from './Results';

const SearchApi = (props) => {
    var locQueryUrl = 'http://www.boredapi.com/api/activity/'

    fetch(locQueryUrl)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
            }

     return response.json();
    })
    .then(function(response) {
        console.log(response)
        var activity = {
            name : response.activity,
            type : response.type,
            participants : response.participants,
            price : response.price,
            key : response.key,
        }

        if (!response) {
            console.log('No Activities Found')
        } else {
            console.log(activity)
            Results(activity);
        }

    })
    .catch(function (error) {
        console.error(error);
      });
}
    

const UserApi = (props) => {
    return (
        <div className='z-10 flex justify-center items-center content-center'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg' id='activity-prompt'>
                <form className='flex flex-col p-8 '>
                    <div>
                        <h1 className='flex p-2 text-4xl text-center'>What are you going to do today? </h1>
                    </div>
                    <div className='flex flex-col p-2'>
                        <label for="quantity">How many participants:</label>
                        <input type="number" className='p-2' id="quantity" name="quantity" min="1" max="99"></input>
                        <label for="vol">Price (from free to $$$): </label>
                        <input type="range" id="vol" name="vol" min="0" max="10"></input>
                    </div>
                    <div className='flex flex-col p-6'>
                        <button onClick={SearchApi} className='bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-6 flex place-self-center items-center w-32 hover:text-sky-400'>Tell Me!</button>
                    </div>    
                </form>
            </div>
        </div>
    )
}

const GenericApi = (props) => {
    return (
        <div className='z-10 flex justify-center items-center content-center'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg' id='activity-prompt'>

                <h1 className='flex p-10 text-4xl text-center'>What are you going to do today? </h1>
            
                <button onClick={SearchApi} className='bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-6 flex items-center hover:text-sky-400'>Tell Me!</button>

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