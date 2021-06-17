
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
 export function saveQuestionToUser(author,id) {
    return {
      type: SAVE_QUESTION_TO_USER,
      author,
      id
    };
  }
 