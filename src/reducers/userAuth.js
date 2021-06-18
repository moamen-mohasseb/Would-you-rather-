import { SET_AUTHED_USER ,DELETE_AUTHED_USER} from '../actions/userAuth'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case DELETE_AUTHED_USER:
      return ''
    default :
      return state
  }
}