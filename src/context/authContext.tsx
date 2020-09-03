import React from "react"
import {contextType} from "../types"
// type contextType={
//     token:string,
//     setToken(vl:string):void
// }
// const authContext=React.createContext<Partial<contextType>>({}) //no default value


const authContext=React.createContext<contextType>(["bgg",(vl):void=>{}])
export default authContext