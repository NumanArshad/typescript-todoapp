import React from "react"
// type contextType={
//     token:string,
//     setToken(vl:string):void
// }
// const authContext=React.createContext<Partial<contextType>>({}) //no default value

type contextType=[string,(vl:string)=>void]
const authContext=React.createContext<contextType>(["bgg",(vl):void=>{}])
export default authContext