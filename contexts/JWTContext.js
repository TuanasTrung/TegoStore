// import { DOMAIN_SERVER_API } from "../config";
// import { API_LOGIN } from "../routes/api";
// // utils
// import { _postApi } from "../utils/axios";
// import {
//   setRefreshToken,
//   setRememberMe,
//   setSession,
//   setRegisterInfo,
//   getAccessToken,
//   getSocialType,
// } from "../utils/jwt";
// import axios from "axios";
// // import * as qs from "qs";
// import { createContext, useEffect, useReducer } from "react";

// const initialState = {
//   // Open authen gurad
//   isAuthenticated: false,
//   isInitialized: false,
//   user: null,
//   applicant: null,
// };

// const handlers = {
//   INITIALIZE: (state, action) => {
//     const { isAuthenticated, user } = action.payload;
//     return {
//       ...state,
//       isAuthenticated,
//       isInitialized: true,
//       user,
//     };
//   },

//   LOGIN: (state, action) => {
//     const { user } = action.payload;

//     return {
//       ...state,
//       isAuthenticated: true,
//       user,
//     };
//   },

//   LOGOUT: (state) => ({
//     ...state,
//     isAuthenticated: false,
//     user: null,
//     applicant: null,
//   }),

//   UPDATE_USER: (state, action) => {
//     const { user } = action.payload;
//     return {
//       ...state,
//       user,
//     }
//   },
// };

// const reducer = (state, action) =>
//   handlers[action.type] ? handlers[action.type](state, action) : state;

// const AuthContext = createContext({
//   ...initialState,
//   method: "jwt",
//   login: () => Promise.resolve(),
//   logout: () => Promise.resolve(),
//   loginSocial: () => Promise.resolve(),
//   setUser: () => { },
// });

// function AuthProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   // const [cookies, setCookie, removeCookie] = useCookies([
//   //   "access_token",
//   //   "refresh_token",
//   // ]);
//   useEffect(() => {
//     const initialize = async () => {
//       try {
//         const accessToken =
//           typeof window !== "undefined"
//             ? localStorage.getItem("accessToken")
//             : "";

//         if (accessToken) {
//           const user = await getUserInfoByToken(accessToken);
//           setSession(accessToken);

//           dispatch({
//             type: "INITIALIZE",
//             payload: {
//               isAuthenticated: true,
//               user,
//             },
//           });
//         } else {
//           dispatch({
//             type: "INITIALIZE",
//             payload: {
//               isAuthenticated: false,
//               user: null,
//             },
//           });
//         }
//       } catch (err) {
//         dispatch({
//           type: "INITIALIZE",
//           payload: {
//             isAuthenticated: false,
//             user: null,
//           },
//         });
//       }
//     };

//     initialize();
//   }, []);

//   const getUserInfoByToken = async (token) => {
//     const config = {
//       method: "get",
//       url: DOMAIN_SERVER_API + '/login',
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     };

//     try {
//       const user = await axios(config);
//       return user.data;
//     } catch (err) {
//       console.log('Get user error: ', err);
//       throw err;
//     }
//   }

//   const setUser = (user) => {
//     dispatch({
//       type: "UPDATE_USER",
//       payload: {
//         user,
//       },
//     });
//   }

//   const login = async (email, password) => {
//     const data = {
//       email,
//       password,
//       // userLoginType: SITE_TYPE,
//     };
//     const response = await _postApi(API_LOGIN, data);
//     const userData = await getUserInfoByToken(response.token);
//     setSession(response.token);
//     setRefreshToken(response.refreshToken);

//     //set access_token to Cookie
//     // let expires = new Date()
//     // expires.setTime(expires.getTime() + (response.expiredIn * 1000))
//     // setCookie('access_token', response.token, { path: '/',  expires})

//     if (userData) {
//       dispatch({
//         type: "LOGIN",
//         payload: {
//           user: userData,
//         },
//       });
//     }
//   };

//   const logout = async () => {
//     setRememberMe(null);
//     setRefreshToken(null);
//     setSession(null);
//     //delete access_token to Cookie
//     // removeCookie('access_token', { path: '/'})

//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         method: "jwt",
//         login,
//         logout,
//         setUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export { AuthContext, AuthProvider };
