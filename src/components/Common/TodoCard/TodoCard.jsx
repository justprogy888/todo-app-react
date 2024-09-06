import "./TodoCard.scss";
import favourite from "./icons/favorite.svg";
import notFavorite from "./icons/not-favorite.svg";
import redact from "./icons/redact.svg";
import del from "./icons/delete.svg";
import check from "./icons/check.svg"
const TodoCard = ({text,id,title,date,isFavorite,isChecked,modalState,changeDeleteTodoIndex,todos,setTodos,changeRedactModalState})=>{
    const setAsFavorite = ()=>{
        let todosNew = todos
        let elem
        for(let i = 0;i <= todos.length - 1;i+=1){
            if(todos[i].id == id){
                if(todosNew[i].isFavorite == false){
                    todosNew[i].isFavorite = true
                    elem = todosNew.splice(i,1)
                }else{
                    todosNew[i].isFavorite = false
                    
                }
                break
            }
        }
        todosNew.sort(function(a, b){return b.id - a.id});
        if(elem != undefined){
            setTodos(prev => [...elem,...todosNew])
        }else{
            setTodos(prev => [...todosNew])
        }
        
    }
    const setAsChecked = ()=>{
        let todosNew = todos
        for(let i = 0;i <= todos.length - 1;i+=1){
            if(todos[i].id == id){
                if(todosNew[i].isChecked == false){
                    todosNew[i].isChecked = true
                }else{
                    todosNew[i].isChecked = false
                }
                break
            }
        }
        setTodos(prev => [...todosNew])
    }
    return (
        <div className={isChecked ? "card card-checked" : "card"}>
            <div className="title-card-cont">
                <p className="card-todo-title">{title}</p>
                <div className="checkbox-todo" onClick={setAsChecked}>
                    <img className={isChecked ? "check": "check isnt-checked"} src={check}></img>
                </div>
            </div>
            <div className="text-todo-container">
                <p className="text-todo-inner">{text}</p>
            </div>
            <div className="todo-toolbar">
                <p className="todo-date">{date}</p>
                <div className="todo-tools">
                    <div className="svg-cont favorite" onClick={setAsFavorite}>
                        <img className="fav-svg" src={isFavorite ? favourite : notFavorite}></img>
                    </div>
                    <div className="svg-cont redact" onClick={()=>{changeRedactModalState(true);changeDeleteTodoIndex(id)}}>
                        <img className="red-svg" src={redact}></img>
                    </div>
                    <div className="svg-cont delete" onClick={()=>{modalState(true); changeDeleteTodoIndex(id)}}>
                        <img className="del-svg" src={del}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TodoCard