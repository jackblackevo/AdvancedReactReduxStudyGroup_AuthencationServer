import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/type'

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER :
      return {...state, authenicated: true}
    default:
      return state
  }
}
