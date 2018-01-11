import axios from 'axios'
import {browserHistory} from 'react-router'

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
