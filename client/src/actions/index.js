import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './type'

const rootUrl = 'http://localhost:3090'

export function signinUser ({ email, password }) {
  return (dispatch) => {
    axios.post(`${rootUrl}/signin`, { email, password })
      .then(
        res => {
          dispatch({ type: AUTH_USER })
          localStorage.setItem('token', res.data.token)
          browserHistory.push('/feature')
        }
      )
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      }
      )
  }
}

export function signupUser ({ email, password }) {
  return function (dispatch) {
    axios({
      url: `${rootUrl}/signup`,
      data: { email, password },
      method: 'post',
      responseType: 'json'
    })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(error => {
        dispatch(authError(error.response.data.error))
      })
  }
}

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

export function fetchMessage () {
  return function (dispatch) {
    axios.get(rootUrl, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
