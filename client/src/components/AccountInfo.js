import React from "react";

const AccountInfo = () => {
    return (
        <div className="flex flex-col space-y-4 bg-yellow-300 p-8 rounded-xl">
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black text-center">Account Information</h3>
        <div className="flex flex-wrap justify-center">
          <img
          src="../"
          className="p-1 bg-blue border rounded max-w-sm"
          alt="User's profile picture"
        />
        </div>

        <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 flex flex-col w-full ">
          <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Name</li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">Username</li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">Email</li>
        </ul>
      </div>        
    
    )
}

export default AccountInfo;