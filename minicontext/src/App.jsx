import React from 'react'
import Login from './Components/login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './context/userContextProvider'
function App() {

  return (
    <UserContextProvider>
      <h1>Aniket</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App