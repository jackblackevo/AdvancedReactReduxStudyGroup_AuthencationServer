import axios from 'axios'
import {AUTH_USER} from './type'

const rootUrl = 'http://localhost:3090/'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}signin`, {email, password})   
      .then(
        res => console.log(res)
      )       
      .catch(
        err => alert(err)
      )
  }
};
