

/////////login user info/////
export interface login_user {
    profile: string;
    name: string;
    accesstoken: string
}

///////todo single item///////
export interface todoItem {
    id: number;
    text: string;
    isCompleted: boolean
}

///////todo list//////
export type State = todoItem[]

/////todo action/////
export interface Action {
    type: String,
    payload?: State | number | string
}

/////todo prop types////
export interface todoPropType {
    state: State,
    handleDelete: (index: number) => void,
    handleTriggerComplete: (index: number) => void,
    handleRLDDChange: (ReorderItems: State) => void,
}