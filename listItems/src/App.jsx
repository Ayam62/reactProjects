import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './components/Food'; 
import ErrorMsg from './components/errormsg.jsx'
import Container from './components/Container.jsx';
import FoodInput from './components/FoodInput.jsx';


function App() {

  let[foods,setFoods]=useState([])

  let [textToShow,settextToShow]=useState("Food entered by User")
  console.log(`current val=${textToShow}`)

  const handleOnChange=(e)=>{
    console.log(e.target.value)
    settextToShow(e.target.value)
}
  const handleOnKeyDown=(e)=>{
     if(e.key==="Enter"){
      console.log(e.target.value)
      let newFood=e.target.value
      let newItems=[...foods,newFood]
      setFoods(newItems);
      event.target.value=""
    }
  }

  return (<>
    <Container>
      <h1 className='food-heading'>Healthy Food Items</h1>
      <FoodInput
        // handleOnChange={handleOnChange}
        handleOnKeyDown={handleOnKeyDown}
      ></FoodInput>
      <p>{textToShow}</p>
      <ErrorMsg foods={foods}></ErrorMsg>
      <Food foods={foods}></Food>
    </Container>
    </>
  )
}

export default App
