import React from "react"
type contextSignature={
    thm:string,
    toggleTheme:any
}
const context=React.createContext<Partial<contextSignature>>({})
export default context