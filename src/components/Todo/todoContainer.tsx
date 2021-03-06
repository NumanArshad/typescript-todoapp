import React, { useState, useEffect, useReducer,useCallback } from "react"
import { State, Action } from "../../interfaces"
import TodoList from "./todoList"
const todoReducer = (state: State, action: Action):State => {
    switch (action.type) {
        case 'add':
            let lst = [...state, { text: action.payload, isCompleted: false, id: state.length + 1 }]
            localStorage.setItem('list', JSON.stringify(lst))
            return (lst as State)
        case 'delete':
            let filterLst = state.filter((item, index) => index !== action.payload)
            localStorage.setItem('list', JSON.stringify(filterLst))
            return filterLst
        case 'updatetodos':
            localStorage.setItem('list', JSON.stringify(action.payload))
            return (action.payload as State)
        case 'load':
            // console.log("load called")
            let parse = JSON.parse((localStorage.getItem('list') as string))
            return parse || []
        default:
            return state

    }
}
const intiatState: State = []
const TodoContainer: React.FC = () => {
    const [item, setItem] = useState<string>('')
    const [state, dispatch] = useReducer(todoReducer, intiatState)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItem(e.target.value)
    }

    useEffect(() => {
        dispatch({ type: 'load' })
    }, [])

    const handleAdd = (): void => {
        setItem('')
        dispatch({ type: 'add', payload: item })
    }
    const handleDelete = useCallback((index: number): void => {
        dispatch({ type: 'delete', payload: index })
    },[])

    const handleRLDDChange = useCallback((ReorderItems: State): void => {
        dispatch({ type: 'updatetodos', payload: ReorderItems })
    },[])

   const handleTriggerComplete = useCallback((index: number): void => {
        const items: State = [...state]
        items[index].isCompleted = !items[index].isCompleted
        dispatch({ type: 'updatetodos', payload: items })
    },[state])

    return (

        <div className="d-flex flex-column align-items-center mt-4">
            <h2>Todos</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Todo Item</label>
                <input type="text" value={item} onChange={handleChange} className="form-control" id="exampleInputEmail1" placeholder="Enter text" />
            </div>
            <button onClick={handleAdd} className="btn btn-primary" disabled={item.length === 0}>Add</button>

            <TodoList state={state} handleDelete={handleDelete} handleTriggerComplete={handleTriggerComplete} handleRLDDChange={handleRLDDChange} />
        </div>
    )
}
export default TodoContainer
