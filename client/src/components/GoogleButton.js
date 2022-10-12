// import React, { useEffect, useState } from "react";
// import decode from "jwt-decode";

// const GoogleButton = () => {
// //  const [user, setUser] = useState({});
   



//   function handleResponse(response) {
//     console.log("encoded Jwt Id Token: ", + response.credential);
//     var userObject = decode(response.credential);
//     console.log(userObject)
//     // setUser(userObject);
//   }

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:
//         "46275376257-b9phvrfcr1gi0dvj0apcdkrlsgareko5.apps.googleusercontent.com",
//       callback: handleResponse,
//     });

//     google.accounts.id.renderButton(document.getElementById("google-signin"),
//     {theme: "outline", size: "large", longtitle: true, type: "standard"});
//   }, []);

//   return (
//     <div className="App" >
//     <div
//       id="google-signin"
//     ></div>
//     </div>
//   );
// };

// export default GoogleButton;
