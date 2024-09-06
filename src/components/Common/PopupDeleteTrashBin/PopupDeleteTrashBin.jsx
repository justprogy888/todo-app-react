import "./PopupDeleteTrashBin.scss"
import {useState} from "react"
const PopupDeleteTrashBin = ({state,changeState,todos,setTodos,deleteId})=>{
    const deleteTodo = (event) => {
        event.preventDefault()
        /*let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let date = mm + '/' + dd + '/' + yyyy + " " + time;*/
        let todoArr = todos.filter(el => el.id != deleteId)
        setTodos(todoArr)
    }
    return (
        <div className={state ? "modal-delete-trash active" : "modal-delete-trash"}>
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
export default PopupDeleteTrashBin