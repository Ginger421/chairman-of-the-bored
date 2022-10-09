import React from 'react'

const LeaderBoard = (props) => {

    //import user data (and sort by points) from db. Do foreach statement 

    return (
        <div className='flex bg-yellow-300 p-8 rounded-xl'>
            <table className='table-fixed w-6/12'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
    )
}

export default LeaderBoard;