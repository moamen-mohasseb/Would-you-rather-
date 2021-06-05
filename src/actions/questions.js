export const RECEIVE_QUEST='RECEIVE_QUEST'
export function receiveQuest(questions){
    return({
        type: RECEIVE_QUEST,
        questions
    })
}