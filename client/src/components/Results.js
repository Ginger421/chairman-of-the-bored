import React from 'react'
import BoredApi from './BoredApi'

const NoActivity = (props) => {
    return(
        <div></div>
    )
}

const ActivityResult = (props) => {
    return(
        <div className='z-10 flex justify-center items-center content-center'>
            <div className='flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg'>
                <h1> activityName </h1>
                <button>Lets do it!</button>
                <button onclick={BoredApi}>Nope!</button>
            </div>
        </div>
    )
}

const Results = (activity) => {
    var activityName = activity.name;
    console.log(activityName)
    
    if(!activity) {
    return (
        <ActivityResult/>
        )
    } else {
        <NoActivity/>
    }
}

export default Results;