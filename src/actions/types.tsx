export const SEND_MESSAGE="SEND_MESSAGE"
export const DELETE_MESSAGE="DELETE_MESSAGE"


export interface Message{
    user:string,
    text:string
}

export type SendMessageAction={
    type:typeof SEND_MESSAGE
    payload:Message
}
export type DeleteMessageAction={
    type:typeof DELETE_MESSAGE
    payload:number
}

export type ActionsType=SendMessageAction | DeleteMessageAction

export type StateType={
    messages:Message[]
}