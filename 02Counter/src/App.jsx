import { useState } from "react";
import "./App.css";

/*
// wrong solution: 
function App() {
  // let counter = 25;
  let [counter,setCounter] = useState(15)
  const addCounter = () => {
    setCounter(++counter) // this cause bugs during mutation
    console.log("Value Added", counter);//jusut for test, remove later
  };
  const resetCounter = () => {

    setCounter(counter = 0)
    console.log("Value Reset", counter);//just for test, remove later
  };
*/

// Optimal solution:

function App() {
  const [counter, setCounter] = useState(15);

  const addCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 20) {
        return prevCounter;
      } //let user not exceed 20
      const newCounter = prevCounter + 1;
      return newCounter;
    });
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        return prevCounter;
      } //let user not go below 0
      const newCounter = prevCounter - 1;
      return newCounter;
    });
  };

  return (
    <>
      <h1>Sujit</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addCounter}>Add to {counter}</button>
      <br />
      <button onClick={decrementCounter}>Decrement {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
