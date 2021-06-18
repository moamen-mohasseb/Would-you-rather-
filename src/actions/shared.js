import {getInitialData,_saveQuestion,_saveQuestionAnswer} from '../utils/_DATA'
import {receiveQuest,saveAnswerToQuestion,saveQestionToQuestions} from './questions'
import {receiveUsers,saveAnswerToUser,saveQuestionToUser} from './users'
import {setAuthedUser} from './userAuth'
import { showLoading, hideLoading } from 'react-redux-loading'
const AUTHED_ID = ''

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
export function handleSaveAnswer (info) {
  console.log("important :",info)
  return (dispatch) => {
    dispatch(saveAnswerToQuestion(info))
    dispatch(saveAnswerToUser(info))

    return _saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleSaveAnswer: ', e)
        //dispatch(SaveAnswer(info))
        alert('The was an error Saving your answer. Try again.')
      })
  }
}
export function handleSaveQuestion (question) {
  const {optionOne, optionTwo, author}=question
console.log("actions",optionOne, "|",optionTwo,"|", author)
return (dispatch) => {
  

  return _saveQuestion(question).then( question => {
    console.log("question:",question,question.author,question.id)
    dispatch(saveQestionToQuestions(question))
    
    dispatch(saveQuestionToUser(question.author,question.id))
  })
    .catch((e) => {
      console.warn('Error in handleSaveQuestion: ', e)
     
      alert('There was an error Saving your question. Try again.')
    })
}
}