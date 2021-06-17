import {RECEIVE_USERS,SAVE_ANSWER_TO_USER,SAVE_QUESTION_TO_USER} from '../actions/users'

export default function users(state={},action){
    switch(action.type){
        case RECEIVE_USERS:
          return{
            ...state,
            ...action.users
          } ;
          case SAVE_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    case SAVE_QUESTION_TO_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };
        default:
            return state
    }
}