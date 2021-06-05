import {getInitialData} from '../utils/_DATA'
import {receiveQuest} from './questions'
import {receiveUsers} from './users'
import {setAuthedUser} from './userAuth'
import { showLoading, hideLoading } from 'react-redux-loading'
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuest(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}