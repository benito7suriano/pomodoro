import React, { useState, useEffect } from 'react'
import './App.css'
import Pomodoro from './components/Pomodoro'
import Sidebar from './components/Sidebar'
import { timer } from './timer'
import Done from './components/Done'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState(-1)
  const [currentMode, setCurrentMode] = useState('focus')
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [areTasksPending, setAreTasksPending] = useState(false)
  const [count, setCount] = useState(1)
  const [timeLeft, setTimeLeft] = useState(timer[currentMode] * 60)
  const [displayAlert, setDisplayAlert] = useState(false)

  const updateTasks = () => {
    let activeTaskIdx = currentTask + 1
    let updatedTasks
    if (activeTaskIdx > tasks.length - 1) {
      setAreTasksPending(false)
      updatedTasks = tasks.map((task, idx) => {
        if (idx === tasks.length - 1) {
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

  const toggleTimer = () => {
    if (tasks.length === 0) {
      setDisplayAlert(true)
    } else {
      if (currentTask === -1) {
        updateTasks()
      }
      setIsTimerActive(!isTimerActive)
    }
  }

  const resetTimer = () => {
    setTimeLeft(timer[currentMode] * 60)
    setIsTimerActive(false)
  }

  const switchMode = (currentMode, count) => {
    let nextMode = ''
    if (currentMode === 'focus') {
      if (count % 4 === 0) {
        nextMode = 'longBreak'
      } else {
        nextMode = 'shortBreak'
      }
    } else {
      nextMode = 'focus'
    }
    return nextMode
  }

  useEffect(() => {
    let countdown = null
    if (isTimerActive && timeLeft > 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (isTimerActive && timeLeft === 0) {
      clearInterval(countdown)
    } else {
      clearInterval(countdown)
    }
    return () => {
      clearInterval(countdown)
    }
  }, [timeLeft, isTimerActive])

  return (
    <>
      {areTasksPending ? (
        <Pomodoro
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          displayAlert={displayAlert}
          setDisplayAlert={setDisplayAlert}
          switchMode={switchMode}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          isTimerActive={isTimerActive}
          count={count}
          setCount={setCount}
          updateTasks={updateTasks}
        />
      ) : (
        <Done />
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
