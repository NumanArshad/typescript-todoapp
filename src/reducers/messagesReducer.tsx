import {SEND_MESSAGE,DELETE_MESSAGE,ActionsType,StateType} from "../actions/types"

const intialState:StateType={
messages:[]
}
export default function(state=intialState,action:ActionsType):StateType{
    switch(action.type){
        case SEND_MESSAGE:
        return {messages:[...state.messages,action.payload]}
        case DELETE_MESSAGE:
        return {messages:state.messages.filter((vl,index)=>index!==action.payload)}
    default:
    return state
    }
}