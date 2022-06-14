import React, { useState, useEffect } from 'react'
import './App.css'
import Pomodoro from './components/Pomodoro'
import Sidebar from './components/Sidebar'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState(-1)
  const [currentMode, setCurrentMode] = useState('focus')
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [areTasksPending, setAreTasksPending] = useState(false)
  const [count, setCount] = useState(1)

  const updateTasks = () => {
    let activeTaskIdx = currentTask + 1
    let updatedTasks
    if (activeTaskIdx > tasks.length - 1) {
      setAreTasksPending(false)
      updatedTasks = tasks.map((task, idx) => {
        if (idx === task.length - 1) {
          return { ...task, status: 'done' }
        }
        return task
      })
    } else {
      updatedTasks = tasks.map((task, idx) => {
        if (idx === activeTaskIdx - 1) {
          return { ...task, status: 'done' }
        }
        if (idx === activeTaskIdx) {
          return { ...task, status: 'active' }
        }
        return task
      })
    }
    setTasks(updatedTasks)
    setCurrentTask(activeTaskIdx)
  }

  const handleToggle = () => {
    if (!isTimerActive) {
      updateTasks()
    }

    setIsTimerActive(!isTimerActive)
  }

  return (
    <>
      {areTasksPending ? (
        <Pomodoro
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          isTimerActive={isTimerActive}
          SetIsTimerActive={setIsTimerActive}
          count={count}
          setCount={setCount}
          tasks={tasks}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          handleToggle={handleToggle}
          updateTasks={updateTasks}
          setAreTasksPending={setAreTasksPending}
        />
      ) : (
        <h1>Done.</h1>
      )}
      <Sidebar
        tasks={tasks}
        setTasks={setTasks}
        setAreTasksPending={setAreTasksPending}
      />
    </>
  )
}

export default App
