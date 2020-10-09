import React, { useContext } from "react"
import context from "./userContext"
const Child=()=>{
    const {thm,toggleTheme}=useContext(context)
const call=():void=>{
    toggleTheme()
}
    return(<><h3>hello form child {thm}</h3>
    <button onClick={()=>call()}>frgr</button>
    </>)
}

const Parent=()=>{
    return(<><h3>hello form Parent</h3><Child /></>)
}
export default Parent