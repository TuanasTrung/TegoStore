import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { DOMAIN_SERVER_API } from '../config';

const refreshToken = async (user) => {
  try {
    const res = await axios.post(`${DOMAIN_SERVER_API}/auth/refresh`, {refreshToken: user?.refreshToken}
    // {
    //   withCredentials: true,
    //   credentials: 'include',
    // }
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const createAxios = (user, dispatch, stateSuccess) => {
  const newInstance = axios.create();

  newInstance.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decodedToken = jwt_decode(user?.accessToken)
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken(user)
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        }
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken
      }
      return config;
    },
    (err) => {
      return Promise.reject(err)
    }
  );
  return newInstance;
}