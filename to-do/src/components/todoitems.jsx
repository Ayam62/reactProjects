import Task1 from "./task1";

const TodoItems=({todo,handleDlt})=>{
   
    return(
        <>
    {todo.map((item)=>
        <Task1 task={item.name} date={item.date} handleDlt={handleDlt}></Task1>
    )
    }
    </>
    
)
}
export default TodoItems;