import EveryPageLayout from "../layouts/EveryPage"
import AccountInfo from "../components/AccountInfo"
import AccountSummary from "../components/AccountSummary"
import LeaderBoard from "../components/LeaderBoard"

const ProfilePage = () => {
  return(
    <EveryPageLayout>
      
      <div className="min-h-full bg-gray-100 font-body flex flex-wrap bg-profile bg-center bg-cover">  
          <div className="justify-start p-8 w-1/2"> 
            <AccountInfo />
          </div>
          <div className="justify-start p-8 w-1/2">
            <AccountSummary />
          </div>
          <div className="justify-start p-8 w-1/2">
            <LeaderBoard/>
          </div>
      </div> 
      </EveryPageLayout>
  ) }

  export default ProfilePage