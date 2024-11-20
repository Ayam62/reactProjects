const FoodInput=({handleOnChange})=>{
   

    return(
        <>
        <input type="text" placeholder="Enter Food item here" className="food-input"
        onChange={handleOnChange}
         >
        </input>
        </>

    )
}
export default FoodInput