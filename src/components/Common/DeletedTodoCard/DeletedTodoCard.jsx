import "./DeletedTodoCard.scss";
import del from "./icons/delete.svg";
import { getLocalStorage,setLocalStorage } from "../../utils/localStorageFunctions";
const DeletedTodoCard = ({text,id,title,date,changeDeleteId,changeModalState,changeDeletedTodos})=>{
    const RestoreTodo = ()=>{
        let todos = getLocalStorage("todos")
        let deletedTodos = getLocalStorage("deletedTodos")
        let itemToRestore
        for(let i = 0; i<=deletedTodos.length - 1;i+=1){
            if(deletedTodos[i].id == id){
                itemToRestore = deletedTodos.splice(i,1)
                break
            }
        }
        setLocalStorage("todos", [...todos,...itemToRestore])
        changeDeletedTodos(prev => [...deletedTodos])
    }
    return (
        <div className="deleted-card">
            <div className="title-card-cont">
                <p className="card-todo-title">{title}</p>
            </div>
            <div className="text-todo-container">
                <p className="text-todo-inner">{text}</p>
            </div>
            <div className="todo-toolbar">
                <button className="restore-button" onClick={RestoreTodo}>Restore</button>
                <p className="todo-date">{date}</p>
                <div className="svg-cont delete" onClick={()=>{changeModalState(true); changeDeleteId(id)}}>
                    <img className="del-svg" src={del}></img>
                </div>
            </div>
        </div>
    );
}
export default DeletedTodoCard