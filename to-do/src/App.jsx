import { useState,useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import Task1 from "./components/task1";
import TodoItems from "./components/todoitems";
import Heading from "./components/heading";
import Error from "../../04_Calcluater/src/components/error";
import TodoItemsContext from "./store/toDoStore";

const todoItemsReducer=(action)=>{
  return[];
}

function App() {
  //const [toDo, settoDo] = useState([]);
  const [toDo,dispatchToDoItems]=useReducer(todoItemsReducer,[]);

  // const sethandleAdd = (name, date) => {
  //   settoDo((currentVal) => {
  //     const todoArr = [...currentVal, { name, date }];
  //     return todoArr;
  //   });
  // };
  const addNewItem=(name,date)


  const sethandleDlt = (itemName, itemDate) => {
    const newToDoItems = toDo.filter((item) => item.name != itemName);
    settoDo(newToDoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{
        items:toDo,
        sethandleAdd:sethandleAdd,
        sethandleDlt:sethandleDlt,
        }}>
        <Heading></Heading>
        <Title></Title>
        <Error todo={toDo}></Error>
        <TodoItems></TodoItems>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
