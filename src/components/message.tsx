import React, { useState } from "react"
import {Message,StateType,ActionsType} from "../actions/types"
import {sendMessage} from "../actions/messageActions"
import {useDispatch, useSelector} from "react-redux"
import { Dispatch } from "redux";

 const MessageCmp:React.FC=()=>{
     const [message,setMessage]=useState<Message>({user:"",text:""})
    
// const dispatch:Dispatch<ActionsType>=useDispatch()
const dispatch=useDispatch<Dispatch<ActionsType>>()
const {messages}=useSelector((state:StateType)=>state)
     const add=()=>{

dispatch(sendMessage(message))
setMessage({user:"",text:""})
     }
     const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
         const {name,value}=event.target
    setMessage({...message,[name]:value})
     }
    return(<><input type="text"  name="user" value={message.user} onChange={handleChange}/><input type="text" value={message.text}   name="text" onChange={handleChange}/>
    <button onClick={add}>g5yht</button>
{JSON.stringify(messages)}
    </>)
}


export default MessageCmp


    
   
// type propsType=ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchTProps>
//  const MessageCmp:React.FC<propsType>=({messages,...rest})=>{
//      const [message,setMessage]=useState<Message>({user:"",text:""})
    
//      const add=()=>{

// rest.SendMessage(message)
//      }
//      const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
//          const {name,value}=event.target
//     setMessage({...message,[name]:value})
//      }
//     return(<><input type="text"  name="user" value={message.user} onChange={handleChange}/><input type="text" value={message.text}   name="text" onChange={handleChange}/>
//     <button onClick={add}>g5yht</button>
// {JSON.stringify(messages)}
//     </>)
// }

// const mapStateToProps=(state:StateType)=>({
// messages:state.messages
// })
// const mapDispatchTProps=(dispatch:Dispatch<ActionsType>)=>({
// SendMessage:(msg:Message)=>dispatch(sendMessage(msg)),
// DelMessage:(index:number)=>dispatch(deleteMessage(index))
// })

// export default connect(mapStateToProps,mapDispatchTProps) (MessageCmp)
