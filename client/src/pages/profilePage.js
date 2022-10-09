import EveryPageLayout from "../layouts/EveryPage"
import AccountInfo from "../components/AccountInfo"
import AccountSummary from "../components/AccountSummary"

const ProfilePage = () => {
    return(
    <EveryPageLayout>
      
      <div className="min-h-full bg-gray-100 font-body flex">  
          <div className="
            flex flex-col h-full justify-start
            bg-cover bg-center bg-fixed bg-no-repeat
          "> 
          <AccountInfo />
          <AccountSummary />
          </div>
      </div> 
      </EveryPageLayout>
    ) }

    export default ProfilePage