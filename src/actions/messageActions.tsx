import * as type from "./types"
export const sendMessage=(text:type.Message):type.SendMessageAction=>{
return {
    type:type.SEND_MESSAGE,
    payload:text
}
}
export const deleteMessage=(index:number):type.DeleteMessageAction=>{
    return{
        type:type.DELETE_MESSAGE,
        payload:index
    }
}