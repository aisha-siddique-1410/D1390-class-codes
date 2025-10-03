
import { useState } from "react";

function App() {
// let counter = 15;

let [counter, setCounter] = useState(15);

const addValue = () => {

  console.log("clicked", counter)
  // console.log("clicked", counter)
  // setCounter(counter +1 );
  setCounter(prev => prev+1);
  setCounter(prev => prev+1);
  setCounter(prev => prev+1);
  setCounter(prev => prev+1);
}

const removeValue = () => {
  console.log("clicked", counter)
  setCounter(counter -1 );
}

  return (
    <>
      <h1> Counter App :  {counter}</h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}> Increase Value :  {counter}</button>
       <button onClick={removeValue}> Decrease Value :  {counter}</button>
    </>
  )
}

export default App
