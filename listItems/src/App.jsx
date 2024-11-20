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
  let foods=["dal","bhat","tarkari"]

  let [textToShow,settextToShow]=useState("Food entered by User")
  console.log(`current val=${textToShow}`)


  const handleOnChange=(e)=>{
    console.log(e.target.value)
    // settextToShow(e.target.value)
    // console.log(`Updated state: ${textToShow}`);
}
  
  return (<>
    <Container>
      <h1 className='food-heading'>Healthy Food Items</h1>
      <FoodInput></FoodInput>
      <p>{textToShow}</p>
      <ErrorMsg foods={foods}></ErrorMsg>
      <Food foods={foods}
            handleOnChange={handleOnChange}
      ></Food>
    </Container>
    {/* <Container>
      <p>Hey Eat the above dishes</p>
    </Container> */}
    </>
  )
}

export default App
