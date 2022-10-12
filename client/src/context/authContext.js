// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
























// import React, { useReducer, createContext } from "react";
// import decode from "jwt-decode";

// const initialState = {
//   user: null,
// };

// if (localStorage.getItem("token")) {
//   const decodedToken = decode(localStorage.getItem("token"));

//   if (decodedToken.exp * 1000 < Date.now()) {
//     localStorage.removeItem("token");
//   } else {
//     initialState.user = decodedToken;
//   }
// }



// function authReducer(state, action) {
//     switch(action.type) {
//         case "LOGIN":
//             return {
//                 ...state,
//                 user: action.payload,
//             }
//         case "LOGOUT":
//             return {
//                 ...state,
//                 user: null,
//             }
//         default:
//             return state;
//     }
// }

// function AuthProvider(props) {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     const login = (userData) => {
//         localStorage.setItem("token", userData.token);
//         dispatch({
//             type: "LOGIN",
//             payload: userData,
//         })
//     }
//     function logout() {
//         localStorage.removeItem("token");
//         dispatch({ type: "LOGOUT" });
//     }

//     return (
//         <AuthContext.Provider
//             value={{ user: state.user, login, logout }}
//             {...props}
//         />
//     )

// }

// export {AuthProvider };