import React, { useState, useEffect } from 'react'
import './App.css'
import Pomodoro from './components/Pomodoro'
import Sidebar from './components/Sidebar'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentMode, setCurrentMode] = useState('focus')
  const [isTimerActive, SetIsTimerActive] = useState(false)
  const [count, setCount] = useState(1)

  return (
    <>
      <Pomodoro
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        isTimerActive={isTimerActive}
        SetIsTimerActive={SetIsTimerActive}
        count={count}
        setCount={setCount}
      />
      <Sidebar />
    </>
  )
}

export default App
