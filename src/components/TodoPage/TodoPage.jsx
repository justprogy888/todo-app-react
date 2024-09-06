import "./TodoPage.scss"
import Popup from "../Common/Popup/Popup"
import { useState, useEffect } from "react"
import {getLocalStorage, setLocalStorage} from "../utils/localStorageFunctions"
import TodoCard from "../Common/TodoCard/TodoCard"
import PopupDelete from "../Common/PopupDelete/PopupDelete"
import PopupRedact from "../Common/PopupRedact/PopupRedact"
const TodoPage = () => {
	const [isOpen, changeState] = useState(false)
	const [isDeleteModalOpen, changeDeleteModalState] = useState(false)
	const [isRedactModalOpen, changeRedactModalState] = useState(false)
	const [todos,setTodos] = useState(getLocalStorage("todos"))
	const [todoIndex,changeCurrentTodoIndex] = useState()
	let id = 0
	if (localStorage.getItem("lastId") != undefined){
		id = Number(localStorage.getItem("lastId"))
	}
	const [incr,changeIncrement] = useState(id)
	useEffect(()=>{
        setLocalStorage("todos",todos)
    },[todos])
	useEffect(()=>{
        localStorage.setItem("lastId",Number(incr))
    },[incr])
	return (
		<main id="todo">
			<Popup state={isOpen} changeState={changeState} setTodos={setTodos} changeIncrement={changeIncrement} incr={incr}/>
			<PopupDelete state={isDeleteModalOpen} changeState={changeDeleteModalState} todos={todos} setTodos={setTodos} 
			deleteId={todoIndex}/>
			<PopupRedact id={todoIndex} state={isRedactModalOpen} changeState={changeRedactModalState} setTodos={setTodos} todos={todos}/>
			<div className="container">
				<div className="title-cont">
					<p className="todos-title">Your todos</p>
					<button className="add-todo" onClick={()=>{changeState(true)}}>Add todo</button>
				</div>
				<div className="todos">
					{
						todos.length != 0 ? todos.map(el=>{
							let date = new Date(el.date)
							let textDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
							return (
								<TodoCard text={el.text} id={el.id} title={el.title} date={textDate} isFavorite={el.isFavorite} isChecked={el.isChecked} modalState={changeDeleteModalState} changeDeleteTodoIndex={changeCurrentTodoIndex} todos={todos} setTodos={setTodos} changeRedactModalState={changeRedactModalState}/>
							);
						}) : <p>No ToDos</p>
					}
				</div>
			</div>		
		</main>
	)
}

export default TodoPage