import React, {  useState, useEffect } from "react"

interface todoItem {
    text: string;
    isCompleted: boolean
}
const TodoContainer: React.FC = () => {
    const [itemsList, setitemsList] = useState<todoItem[]>([])
    const [item, setItem] = useState<todoItem>({ text: '', isCompleted: false })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItem({ text: e.target.value, isCompleted: false })
    }
    const handleAdd = (): void => {
        setItem({ ...item, text: '' })
        setitemsList([...itemsList, item])
    }

    const handleTriggerComplete = (index: number): void => {
        const items: todoItem[] = [...itemsList]
        items[index].isCompleted = !items[index].isCompleted
        setitemsList(items)
    }

    const divRef=React.useRef<HTMLDivElement>(null)
    //const divRef:React.Ref<HTMLDivElement> = React.useRef(null)
    useEffect(()=>{
     if(divRef.current){
         divRef.current.setAttribute('id',`${itemsList.length}`)
         console.log(divRef.current)
divRef.current.draggable=true
        }

        document.addEventListener('dragstart',handleDrag)
       document.addEventListener('dragover',event=>
       {event.preventDefault();
        console.dir((event.target as Element).innerHTML)})
       document.addEventListener('drop',handleDrop)
    },[itemsList])

const handleDrag=(event:DragEvent)=>{
    const dragSource:Object={elementId:(event.target as Element).id,position:event.clientY}
    console.dir((event.target as Element).innerHTML)
    event.dataTransfer?.setData('dragElement',JSON.stringify(dragSource))
   }

const handleDrop=(event:DragEvent)=>{
    
console.log("source "+event.dataTransfer?.getData('dragElement'))
    
console.log((event.target as Element).id)
}

    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <h2>Todo container</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Todo Item</label>
                <input type="text" value={item.text} onChange={handleChange} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div ref={divRef}>fnkfenk</div>
            <button onClick={handleAdd} className="btn btn-primary">Add</button>
            <>
                {itemsList.map((item, index) => {
                    return (
                        <div className="card w-50 mt-4" ref={divRef} key={index}>
                            <div className="card-body">
                                <h5 className="card-title">Todo Item</h5>
                                <p className="card-text">{item.text}</p>
                                <button className="btn btn-primary" onClick={() => handleTriggerComplete(index)}>{item.isCompleted ? "Completed" : "Incompleted"}</button>
                            </div>
                        </div>
                    )
                })}
            </>
        </div>


    )
}
export default TodoContainer