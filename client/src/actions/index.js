<<<<<<< HEAD
export function signinUser ({ email, password }) {};
=======
import axios from 'axios'
import {browserHistory} from 'react-router'
import {AUTH_USER} from './type'

const rootUrl = 'http://localhost:3090/'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}signin`, {email, password})   
      .then(
        res => {
          console.log(res)
          browserHistory.push('/feature')
        }
      )       
      .catch(
        err => alert(err)
      )
  }
};
>>>>>>> 8baa9c3... make signin request in server allow CORS setup ready
