import axios from 'axios'
import {browserHistory} from 'react-router'
import {AUTH_USER,AUTH_ERROR} from './type'

const rootUrl = 'http://localhost:3090/'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}signin`, { email, password })
      .then(
        res => {
          dispatch({ type: AUTH_USER })
          localStorage.setItem('token', res.data.token)
          browserHistory.push('/feature')
        }
      )       
      .catch(()=>{
          displatch(authError["Bad Login Info"])
        }
      )
  }
};


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
