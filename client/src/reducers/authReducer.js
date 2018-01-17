import { AUTH_USER } from '../actions/type'

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER :
      return {...state, authenicated: true}
    case UNAUTH_USER:
      return {...state , authenicatedf:false}
    case AUTH_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
