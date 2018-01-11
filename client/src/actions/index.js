import axios from 'axios'
import {browserHistory} from 'react-router'
import {AUTH_USER} from './type'

const rootUrl = 'http://localhost:3090/'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}signin`, {email, password})   
      .then(
        res => {
          dispatch({type: AUTH_USER})
          browserHistory.push('/feature')
        }
      )       
      .catch(
        err => alert(err)
      )
  }
};
