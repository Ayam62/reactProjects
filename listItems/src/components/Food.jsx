import Item from "./Item";
import { useState } from "react";

const Food = ({ foods }) => {
  const [bought, setBought] = useState([]);

  const changeBg = (item, e) => {
    setBought([...bought, item]);
  };
  return (
    <ul className="list-group">
      {foods.map((item, index) => (
        <Item
          key={index}
          foods={item}
          handleBuy={(e) => changeBg(item, e)}
          bought={bought.includes(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default Food;
