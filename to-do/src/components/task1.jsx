import { AiFillDelete } from 'react-icons/ai'

import TodoItemsContext from '../store/toDoStore'
import { useContext } from 'react'
const Task1 = ({ task, date}) => {
 
const {sethandleDlt}=useContext(TodoItemsContext)

  return (
    <div class="row g-0 text-center task-container">
      <div class="col-sm-6 col-md-6 box">
        <p>{task}</p>
      </div>
      <div class="col-6 col-md-3 date-input box">
        <p>{date}</p>
      </div>
      <div class="col-6 col-md-3 add-task box">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => sethandleDlt(task, date)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  )
}

export default Task1
