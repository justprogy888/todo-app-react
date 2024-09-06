import "./Popup.scss"
import {useState} from "react"
const Popup = ({state,changeState,changeIncrement,setTodos,incr})=>{
    const [inpVal,setInpVal] = useState("")
    const [inpTextVal,setInpTextVal] = useState("")
    const addTodo = (event) => {
        event.preventDefault()
        /*let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let date = mm + '/' + dd + '/' + yyyy + " " + time;*/
        setTodos(prev => [{id:incr, title:inpVal, text:inpTextVal, date:Date.now(), isFavorite: false,isDone:false,isChecked:false},...prev])
        changeIncrement(incr + 1)
        changeState(false)
    }
    return (
        <div className={state ? "modal active" : "modal"}>
            <div className="popup">
                <p className="popup-title">Add todo</p>
                <div className="title-edit">
                    <input className="input-title" type="text" placeholder="Title" value={inpVal} onChange={(event)=>setInpVal(event.target.value)}></input>
                    <button className="button-add" onClick={addTodo}>Add</button>
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
export default Popup