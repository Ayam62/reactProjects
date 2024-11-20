import Item from "./Item";

const Food=({foods})=>{
   
    return(
        <ul className="list-group">
          {foods.map((item,index)=>
          <Item key={index} foods={item}
           handleBuy={()=> console.log(`${item} bought`)}
           ></Item>
          )}
        </ul>
    )
}

export default Food;