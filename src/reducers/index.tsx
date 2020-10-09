import messageReducer from "../reducers/messagesReducer"
import {combineReducers} from "redux"
export const rootReducer=combineReducers({
    messageReducer
})

export type RootState=ReturnType<typeof rootReducer>  ///inherit return type of other fucntion