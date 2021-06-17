import {saveQestionToQuestions} from './questions'
import {_saveQuestion} from '../utils/_DATA'
export const RECEIVE_USERS='RECEIVE_USERS'
export const SAVE_ANSWER_TO_USER='SAVE_ANSWER_TO_USER'
export const SAVE_QUESTION_TO_USER="SAVE_QUESTION_TO_USER"
export function receiveUsers(users){
    return({
        type: RECEIVE_USERS,
        users
    })
}
export function saveAnswerToUser({  authedUser,qid, answer }) {
    return {
      type: SAVE_ANSWER_TO_USER,
      authedUser,
      qid,
      answer
    };
  }
 function saveQuestionToUser(author,id) {
    return {
      type: SAVE_QUESTION_TO_USER,
      author,
      id
    };
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
          //dispatch(SaveAnswer(info))
          alert('There was an error Saving your question. Try again.')
        })
    }
  }