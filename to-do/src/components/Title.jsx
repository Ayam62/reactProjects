const Title = () => {
  return (
    <div class="row g-0 text-center container">
      <div class="col-sm-6 col-md-6 ">
        <input
          type="text"
          className="insert-task"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
      <div class="col-6 col-md-3 date-input ">
        <input type="date" className="input-date"></input>
      </div>
      <div class="col-6 col-md-3 add-task ">
        <button type="button" className="btn btn-success add-btn">
          Add
        </button>
      </div>
    </div>
  )
}
export default Title
