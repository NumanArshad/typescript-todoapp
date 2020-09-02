import React, { useState, useEffect, useReducer } from "react"
import RLDD from "react-list-drag-and-drop/lib/RLDD";

interface item {
    id: number;
    text: string;
    isCompleted: boolean
}

type State = item[]
interface Action {
    type: String,
    payload?: State | number | string
}

const todoRdeucer = (state: State, action: Action) => {
    switch (action.type) {
        case 'add':
            let lst = [...state, { text: action.payload, isCompleted: false, id: state.length + 1 }]
            localStorage.setItem('list', JSON.stringify(lst))
            return lst
        case 'delete':
            let filterLst = state.filter((item, index) => index !== action.payload)
            localStorage.setItem('list', JSON.stringify(filterLst))
            return filterLst
        case 'reorder':
            localStorage.setItem('list', JSON.stringify(action.payload))
            return action.payload
        case 'load':
            let parse = JSON.parse((localStorage.getItem('list') as string))
            return parse || []
        default:
            return state

    }
}

const intiatState: State = []

const TodoContainer: React.FC = () => {
    const [item, setItem] = useState<string>('')
    const [state, dispatch] = useReducer(todoRdeucer, intiatState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItem(e.target.value)
    }
    const handleAdd = (): void => {
        setItem('')
        dispatch({ type: 'add', payload: item })
    }

    const handleDelete = (index: number): void => {
        dispatch({ type: 'delete', payload: index })
    }

    useEffect(() => {
        dispatch({ type: 'load' })
    }, [])

    const handleTriggerComplete = (index: number): void => {
        const items: State = [...state]
        items[index].isCompleted = !items[index].isCompleted
        dispatch({ type: 'reorder', payload: items })
    }

    const itemRenderer = (item: item, index: number): JSX.Element => {
        return (
            <div className="card mt-4" key={index}>
                <div className="card-body">
                    <div className="clearfix">
                        <h5 className="card-text float-left">{item.text}</h5>
                        {item.isCompleted ? <div className="badge badge-pill badge-success ml-2">Completed</div> : <div className="badge badge-pill badge-secondary ml-2">InComplete</div>}
                        <div className="float-right">
                            <button type="button" className="btn btn-primary mr-4" onClick={() => handleTriggerComplete(index)}>Update State</button>
                            <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => handleDelete(index)}>
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const handleRLDDChange = (ReorderItems: State): void => {
        dispatch({ type: 'reorder', payload: ReorderItems })
    }

    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <h2>Todo container</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Todo Item</label>
                <input type="text" value={item} onChange={handleChange} className="form-control" id="exampleInputEmail1" placeholder="Enter text" />
            </div>
            <button onClick={handleAdd} className="btn btn-primary" disabled={item.length === 0}>Add</button>
            <RLDD
                cssClasses="w-50"
                items={state}
                itemRenderer={itemRenderer}
                onChange={handleRLDDChange}
            />
        </div>


    )
}
export default TodoContainer