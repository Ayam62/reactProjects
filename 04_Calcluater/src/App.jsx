import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/buttonContainer";
import Display from "./components/display";
function App() {
  const [displayVal, setdisplayVal] = useState("");
  const buttonHandler = (buttonText) => {
    switch (buttonText) {
      case "C":
        setdisplayVal("");
        break;
      case "=":
        setdisplayVal(eval(displayVal));
        break;
      default:
        setdisplayVal(displayVal + buttonText);
        break;
    }
  };
  return (
    <div id="calculator" className="bg-black-400 w-48">
      <Display displayVal={displayVal}></Display>
      <Button onButtonClick={buttonHandler}></Button>
    </div>
  );
}

export default App;
