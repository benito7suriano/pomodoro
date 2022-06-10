import React, { useState, useEffect } from 'react'
import './App.css'
import Pomodoro from './components/Pomodoro'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Pomodoro />
      <Sidebar />
    </>
  )
}

export default App
