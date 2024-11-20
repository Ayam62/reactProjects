const FoodInput=({handleOnChange,handleOnKeyDown})=>{
   

    return(
        <>
        <input type="text" placeholder="Enter Food item here" className="food-input"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
         >
        </input>
        </>

    )
}
export default FoodInput