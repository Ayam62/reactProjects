const Error=({todo})=>{
    return(
        <>
        {todo.length===0  && <h3 class="h3">No task to do</h3>}
        </>
    )
}
export default Error