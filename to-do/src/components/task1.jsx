const Task1=({task,date})=>{

    return (
    <div class="row g-0 text-center task-container">
      <div class="col-sm-6 col-md-6 box">
        <p>{task}</p>
      </div>
      <div class="col-6 col-md-3 date-input box">
        <p>{date}</p>
      </div>
      <div class="col-6 col-md-3 add-task box">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
    )
}

export default Task1