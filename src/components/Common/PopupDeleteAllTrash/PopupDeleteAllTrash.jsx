import "./PopupDeleteAllTrash.scss"
import {useState} from "react"
import { setLocalStorage,getLocalStorage } from "../../utils/localStorageFunctions"
const PopupDeleteAllTrash = ({state,changeState,setTodos})=>{
    const deleteTodo = (event) => {
        event.preventDefault()
        setTodos(prev => [])
    }
    return (
        <div className={state ? "modal-delete-all active" : "modal-delete-all"}>
            <div className="popup">
                <p className="popup-title">Are you sure?</p>
                <div className="buttons-cont">
                    <button className="button-yes" onClick={(event)=>{deleteTodo(event);changeState(false);}}>Yes</button>
                    <button className="button-no" onClick={()=>changeState(false)}>No</button>
                </div>
            </div>
        </div>
    );
}
export default PopupDeleteAllTrash