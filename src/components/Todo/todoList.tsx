import React,{memo } from "react"
import { todoItem,todoPropType } from "../../interfaces"
import deleteIcon from "../../layouts/deleteIcon.svg"
import RLDD from "react-list-drag-and-drop/lib/RLDD";


const TodoList: React.SFC<todoPropType> = ({ state, handleDelete, handleTriggerComplete, handleRLDDChange }) => {
   const itemRenderer = (item: todoItem, index: number): JSX.Element => {
        return (
            <div className="card mt-4" key={index}>
                <div className="card-body">
                    <div className="clearfix">
                        <h5 className="card-text float-left">{item.text}</h5>
                        {item.isCompleted ? <div className="badge badge-pill badge-success ml-2">Completed</div> :
                            <div className="badge badge-pill badge-secondary ml-2">InComplete</div>}
                        <div className="float-right">
                            <button type="button" className="btn btn-primary mr-4" onClick={() => handleTriggerComplete(index)}>Update State</button>
                            <img src={deleteIcon} alt="delete_icon" onClick={() => handleDelete(index)} className="bi bi-trash" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (<>
        <RLDD cssClasses="w-50" items={state}
            itemRenderer={itemRenderer}
            onChange={handleRLDDChange} />
    </>
    )
}
export default memo(TodoList)
