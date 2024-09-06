import "./TrashBinPage.scss"
import { useState, useEffect } from "react"
import {getLocalStorage, setLocalStorage} from "../utils/localStorageFunctions"
import PopupDeleteTrashBin from "../Common/PopupDeleteTrashBin/PopupDeleteTrashBin"
import DeletedTodoCard from "../Common/DeletedTodoCard/DeletedTodoCard"
import PopupDeleteAllTrash from "../Common/PopupDeleteAllTrash/PopupDeleteAllTrash"
const TrashBinPage = () => {
	
	const [deletedTodos,changeDeletedTodos] = useState(getLocalStorage("deletedTodos"))
	const [modalState,changeDeleteModalState] = useState(false)
	const [modalDeleteAllState,changeDeleteAllState] = useState(false)
	const [deleteId,changeDeleteTodoId] = useState()
	useEffect(()=>{
        setLocalStorage("deletedTodos",deletedTodos)
    },[deletedTodos])

	return (
		<main id="trash">
			<PopupDeleteTrashBin state={modalState} changeState={changeDeleteModalState} todos={deletedTodos} setTodos={changeDeletedTodos} deleteId={deleteId}/>
			<PopupDeleteAllTrash state={modalDeleteAllState} changeState={changeDeleteAllState} setTodos={changeDeletedTodos}/>
			<div className="container">
				<div className="title-cont">
					<p className="todos-title">Deleted ToDos</p>
					<button className="delete-todo" onClick={()=>changeDeleteAllState(true)}>Delete All</button>
				</div>
				<div className="todos">
					{
						deletedTodos.length != 0 ? deletedTodos.map(el=>{
							let date = new Date(el.date)
							let textDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
							return (
								<DeletedTodoCard text={el.text} id={el.id} title={el.title} date={textDate} changeDeleteId={changeDeleteTodoId} changeModalState={changeDeleteModalState} changeDeletedTodos={changeDeletedTodos}/>
							);
						}) : <p>Trash bin is clear!</p>
					}
				</div>
			</div>		
		</main>
	)
}

export default TrashBinPage