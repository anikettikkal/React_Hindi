import { useState } from "react"
function App() {

let [counter , setCounter]= useState(1)

const addValue = ()=>{
  if (counter<15) {
    setCounter(counter+1)
  } else{
    console.log("value is greater than 15");
    
  }
}

const removeValue = ()=>{
  if (counter>0) {
    setCounter(counter-1)
  } else{
    console.log("counter value is not negative");
    
  }
}
  return (

    <>
      <h1>COUNTER PROJECT</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
