import React, { ReactElement } from "react"
type propsTp = {
    name: String,
    setName: React.Dispatch<React.SetStateAction<String>>
}
// const AwesomeComponent:React.FC<propsTp> =({name,setName})=>{
const AwesomeComponent = ({ name, setName }: propsTp): ReactElement => {

    return (
        <><h2>awesome {name}</h2>
        </>
    )
}
export default AwesomeComponent