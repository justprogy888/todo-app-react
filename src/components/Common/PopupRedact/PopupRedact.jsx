import "./PopupRedact.scss"
import {useState} from "react"
const PopupRedact = ({id,state,changeState,setTodos,todos})=>{
    let title = ""
    let text = ""
    
    let todosNew = todos
    for(let i = 0;i <= todos.length - 1;i+=1){
        if(todos[i].id == id){
            title = todos[i].title
            text = todos[i].text
            break
        }
    }
    const redactTodo = (event) => {
        event.preventDefault()
        for(let i = 0;i <= todos.length - 1;i+=1){
            if(todos[i].id == id){
                todos[i].title = inpVal
                todos[i].text = inpTextVal
                break
            }
        }
        setTodos(prev => [...todosNew])
    }
    const [inpVal,setInpVal] = useState("")
    const [inpTextVal,setInpTextVal] = useState("")
    return (
        <div className={state ? "modal-redact active" : "modal-redact"}>
            <div className="popup">
                <p className="popup-title">Redact todo</p>
                <div className="title-edit">
                    <input className="input-title" type="text" placeholder="Title" value={inpVal} onChange={(event)=>setInpVal(event.target.value)}></input>
                    <button className="button-add" onClick={redactTodo}>Save</button>
                </div>
                <textarea className="todo-text" placeholder="Todo" value={inpTextVal} onChange={(event)=>setInpTextVal(event.target.value)}>

                </textarea>
                <button className="close-modal" onClick={()=>changeState(false)}>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 14.545L1.455 16L8 9.455L14.545 16L16 14.545L9.455 8L16 1.455L14.545 0L8 6.545L1.455 0L0 1.455L6.545 8L0 14.545Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
export default PopupRedact