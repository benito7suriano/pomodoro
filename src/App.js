import React, { useState, useEffect } from 'react'
import './App.css'
import Pomodoro from './components/Pomodoro'
import Sidebar from './components/Sidebar'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState(-1)
  const [currentMode, setCurrentMode] = useState('focus')
  const [isTimerActive, SetIsTimerActive] = useState(false)
  const [count, setCount] = useState(1)

  const updateTasks = () => {
    let activeTaskIdx = currentTask + 1
    let updatedTasks = tasks.map((task, idx) => {
      if (idx === activeTaskIdx - 1) {
        return { ...task, status: 'done' }
      }
      if (idx === activeTaskIdx) {
        return { ...task, status: 'active' }
      }
      return task
    })
    setTasks(updatedTasks)
    setCurrentTask(activeTaskIdx)
  }

  const handleToggle = () => {
    if (!isTimerActive) {
      updateTasks()
    }

    SetIsTimerActive(!isTimerActive)
  }

  return (
    <>
      <Pomodoro
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        isTimerActive={isTimerActive}
        SetIsTimerActive={SetIsTimerActive}
        count={count}
        setCount={setCount}
        tasks={tasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        handleToggle={handleToggle}
        updateTasks={updateTasks}
      />
      <Sidebar tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
