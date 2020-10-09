import {createStore} from "redux"
import messageReducer from "../reducers/messagesReducer"
const store=createStore(messageReducer)
export default store