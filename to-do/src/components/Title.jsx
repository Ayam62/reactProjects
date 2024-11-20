import { useState } from "react"

const Title = ({handleAdd}) => {
  const [toDoName,settoDoName]=useState("")
  const [toDoDate,settoDoDate]=useState("")
  
  const handleOnChangeName=(e)=>{
    settoDoName(e.target.value)
  }
  const handleOnChangeDate=(e)=>{
    settoDoDate(e.target.value)
  }


  return (
    <div className="row g-0 text-center container">
      <div className="col-sm-6 col-md-6 ">
        <input
          type="text"
          className="insert-task"
          aria-label="Dollar amount (with dot and two decimal places)"
          onChange={handleOnChangeName}
        />
      </div>
      <div class="col-6 col-md-3 date-input ">
        <input type="date" className="input-date"
        onChange={handleOnChangeDate}
        ></input>
      </div>
      <div class="col-6 col-md-3 add-task ">
        <button type="button" className="btn btn-success add-btn"
        onClick={()=>handleAdd(toDoName,toDoDate)}
        >
          Add
        </button>
      </div>
    </div>
  )
}
export default Title
