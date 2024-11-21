import Task1 from './task1'
import { useContext } from 'react'
import TodoItemsContext from '../store/toDoStore'

const TodoItems = () => {
    const {items,sethandleDlt}=useContext(TodoItemsContext)
    console.log(items)
  return (
    <>
      {items.map((item) => (
        <Task1
          task={item.name}
          date={item.date}
        //   sethandleDlt={sethandleDlt}
          key={item.id}
        ></Task1>
      ))}
    </>
  )
}
export default TodoItems
