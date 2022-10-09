import Reaact from 'react'
import EveryPageLayout from '../layouts/EveryPage'
import LeaderBoard from '../components/LeaderBoard'

const LeaderBoardPage = () => {
    return (
        <EveryPageLayout>
            <div className='flex flex-col bg-leaderboard bg-cover bg-center h-screen p-8'>
                <LeaderBoard/>
            </div>
        </EveryPageLayout>
    )
}

export default LeaderBoardPage;