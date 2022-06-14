import { Buttons } from './Buttons'
import { InspirationalQuote } from './InspirationalQuote'
import { Countdown } from './Countdown'
import { Modes } from './Modes'
import Alert from '@mui/material/Alert'

import React, { useState, useEffect } from 'react'
import { timerTest as timer } from '../timer'

export default function Pomodoro({
  currentMode,
  setCurrentMode,
  isTimerActive,
  SetIsTimerActive,
  count,
  setCount,
  tasks,
}) {
  const [displayAlert, setDisplayAlert] = useState(false)
  const [timeLeft, setTimeLeft] = useState(timer[currentMode] * 60)

  const toggleTimer = () => {
    if (tasks.length === 0) {
      setDisplayAlert(true)
    } else {
      SetIsTimerActive(!isTimerActive)
    }
  }

  const resetTimer = () => {
    setTimeLeft(timer[currentMode] * 60)
    SetIsTimerActive(false)
  }

  const switchMode = (currentMode, count) => {
    let nextMode = ''
    if (currentMode === 'focus') {
      if (count % 4 === 0) {
        nextMode = 'longBreak'
      } else {
        nextMode = 'shortBreak'
      }
      setCount(count + 1)
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
    <main id='pomodoro-container'>
      <Modes currentMode={currentMode} />
      <Countdown
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        switchMode={switchMode}
        currentMode={currentMode}
        count={count}
        setCount={setCount}
        setCurrentMode={setCurrentMode}
      />
      <InspirationalQuote />
      <Buttons
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        isTimerActive={isTimerActive}
      />
      <div className='modal'>
        {displayAlert && (
          <Alert severity='warning'>Please add tasks to your list first.</Alert>
        )}
      </div>
    </main>
  )
}
