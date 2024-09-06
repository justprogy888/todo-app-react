import "./PopupDelete.scss"
import {useState} from "react"
import { setLocalStorage,getLocalStorage } from "../../utils/localStorageFunctions"
const PopupDelete = ({state,changeState,todos,setTodos,deleteId})=>{
    const deleteTodo = (event) => {
        event.preventDefault()
        /*let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let date = mm + '/' + dd + '/' + yyyy + " " + time;*/
        let deletedElem
        for(let i = 0; i<=todos.length;i+=1){
            if(todos[i].id == deleteId){
                deletedElem = todos.splice(i,1)
                break
            }
        }
        //localStorage.setItem("deletedTodos",JSON.stringify(val))
        let deletedValues = getLocalStorage("deletedTodos")
        deletedValues.push(deletedElem[0])
        setLocalStorage("deletedTodos",deletedValues)
        setLocalStorage("todos",todos)
        /*let todoArr = todos.filter(el => el.id != deleteId)
        setTodos(todoArr)*/
    }
    return (
        <div className={state ? "modal-delete active" : "modal-delete"}>
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
export default PopupDelete