import { combineReducers } from 'redux'
import authedUser from './userAuth'
import users from './users'
import question from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  question,
  loadingBar: loadingBarReducer,
})