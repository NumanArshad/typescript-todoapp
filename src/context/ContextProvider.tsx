import React from "react"
import context from "./userContext"
import Parent from "./Parent"
const ContextProvider=()=>{
    const [theme,setTheme]=React.useState<string>("light")

    const toggleTheme=()=>{
      
   setTheme(theme==="dark"?"light":"dark")
    }
    return(<context.Provider value={{thm:theme,toggleTheme}}>
<Parent />
    </context.Provider>)
}

export default ContextProvider