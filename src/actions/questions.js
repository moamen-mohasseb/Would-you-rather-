export const RECEIVE_QUEST='RECEIVE_QUEST'
export const SAVE_ANSWER_TO_QUESTION='SAVE_ANSWER_TO_QUESTION'
export const SAVE_QUESTION_TO_QUESTIONS="SAVE_QUESTION_TO_QUESTIONS"
export function receiveQuest(questions){
    return({
        type: RECEIVE_QUEST,
        questions
    })
}
export function saveAnswerToQuestion ({  authedUser,qid, answer }) {
    return {
      type: SAVE_ANSWER_TO_QUESTION,
      authedUser,
      qid,
      answer
    }
  }
export function saveQestionToQuestions(question){
  return  {
      type: SAVE_QUESTION_TO_QUESTIONS,
      question

    }
}

 
  