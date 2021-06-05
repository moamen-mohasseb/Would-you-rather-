import {RECEIVE_QUEST} from '../actions/questions'

export default function users(state={},action){
    switch(action.type){
        case RECEIVE_QUEST:
          return{
            ...state,
            ...action.questions
          } 
        default:
            return state
    }
}