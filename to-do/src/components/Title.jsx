import { useState,useRef } from 'react'
import { IoAddCircleSharp } from 'react-icons/io5'
import TodoItemsContext from '../store/toDoStore'
import { useContext } from 'react'

const Title = () => {

  const {sethandleAdd}=useContext(TodoItemsContext)
  const todoNameElement=useRef();
  const todoDateElement=useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission
    // Call handleAdd function
    sethandleAdd(todoNameElement.current.value, todoDateElement.current.value)
    todoNameElement.current.value=""
    todoDateElement.current.value=""
  }

  return (
    <div className="row g-0 text-center container">
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="row g-0 text-center container"
      >
        <div className="col-sm-6 col-md-6 ">
          <input
            type="text"
            ref={todoNameElement}
            className="insert-task"
            aria-label="Dollar amount (with dot and two decimal places)"
      
          />
        </div>
        <div class="col-6 col-md-3 date-input ">
          <input
            type="date"
            ref={todoDateElement}
            className="input-date"
          
          ></input>
        </div>
        <div class="col-6 col-md-3 add-task ">
          <button type="submit" className="btn btn-success add-btn">
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  )
}
export default Title
