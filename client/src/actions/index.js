import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './type'

const rootUrl = 'http://localhost:3090/'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}signin`, { email, password })
      .then(
        res => {
          dispatch({ type: AUTH_USER })
          localStorage.setItem('token', res.data.token)
        }
      )
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      }
      )
  }
};

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser () {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}
