import React, { useState, ReactElement } from "react"

type accordianPros={
    preview:Number;
    children?:React.ReactNode
}
type accordianState={
    open:Boolean
}
// export default class Accordian extends React.Component<accordianPros,accordianState> {
//     state = {
//         open: true
//     }
//     render() {
//         return (<><h2>dwhuwbd {this.props.preview}</h2></>)
//     }
// }

export default function Accordian(props:accordianPros) {
 const [val,setValue]=useState<String>('')
    // render() {
        return (<><h2>dwhuwbd {props.preview}</h2></>)
    // }
}