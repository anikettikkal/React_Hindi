import React, { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")


  return (
    <>
      <h1>Bg-Counter</h1>
      <div className='flex items-center justify-center h-screen' style={{marginLeft:"20px",gap:"20px",backgroundColor:color }}>
        <button onClick={()=>{setColor("red")}} className='border-[10px] border-white border-double text-white rounded-2xl bg-red-500 size-18 text-xl font-bold'>red</button>


        <button onClick={()=>{setColor("yellow")}} className='border-[10px] border-white border-double text-white rounded-2xl bg-yellow-500 size-18 text-xl font-bold'>yellow</button>


        <button onClick={()=>{setColor("green")}} className='border-[10px] border-white border-double text-white rounded-2xl bg-green-500 size-18 text-xl font-bold'>green</button>


        <button onClick={()=>{setColor("violet")}} className='border-[10px] border-white border-double text-white rounded-2xl bg-violet-500 size-18 text-xl font-bold'>violet</button>


        <button onClick={()=>{setColor("pink")}} className='border-[10px] border-white border-double text-white rounded-2xl bg-pink-500 size-18 text-xl font-bold'>pink</button>
      </div>
    </>
  )
}

export default App
