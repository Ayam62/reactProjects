import Task1 from "./task1";

const TodoItems=({todo})=>{
    return(
        <>
    {todo.map((item)=>
        <Task1 task={item.name} date={item.date}></Task1>
    )
    }
    </>
    
)
}
export default TodoItems;