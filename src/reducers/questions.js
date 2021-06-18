import {RECEIVE_QUEST,SAVE_ANSWER_TO_QUESTION,SAVE_QUESTION_TO_QUESTIONS} from '../actions/questions'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUEST:
          return{
            ...state,
            ...action.questions
          } 
          case SAVE_ANSWER_TO_QUESTION:
            const { authedUser, qid, answer } = action;
      console.log("reducers :",state[qid][answer])
            return {
              ...state,
              [qid]: {
                ...state[qid],
                [answer]: {
                  ...state[qid][answer],
                  votes: state[qid][answer].votes.concat(authedUser)
                }
              }
            }
          case SAVE_QUESTION_TO_QUESTIONS:
            const { question } = action;
            console.log('SAVE_QUESTION_TO_Questions: ',question )
            return {
              ...state,
              [question.id]: question
            };
        default:
            return state
    }
}