import React from 'react'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='font-bold bg-black p-5 text-center rounded-4xl text-red-600'>Aniket Tikkal</h1>
      <Card username={"Pratiksha"} price={"100$"} id={"345"}/>
      <Card username={"Aniket"} price={"200$"} id={"425"}/>
    </>
  )
}

export default App
