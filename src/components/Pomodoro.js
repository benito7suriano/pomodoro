import { Buttons } from './Buttons'
import { InspirationalQuote } from './InspirationalQuote'
import { Countdown } from './Countdown'
import { Modes } from './Modes'

import React, { useState, useEffect } from 'react'
import { timer } from '../timer'

export default function Pomodoro({}) {
  const [currentMode, setCurrentMode] = useState('focus')
  const [timeLeft, setTimeLeft] = useState(timer[currentMode] * 60)
  const [isTimerActive, SetIsTimerActive] = useState(false)
  const [count, setCount] = useState(1)

  const toggleTimer = () => {
    SetIsTimerActive(!isTimerActive)
  }

  const resetTimer = () => {
    SetIsTimerActive(!isTimerActive)
    setTimeLeft(timer[currentMode] * 60)
  }

  const switchMode = (currentMode, count) => {
    let nextMode = ''
    if (currentMode === 'focus') {
      setCount(count + 1)
      console.log(`completed: ${count}`)
      if (count % 4 === 0) {
        nextMode = 'longBreak'
      } else {
        nextMode = 'shortBreak'
      }
    } else {
      nextMode = 'focus'
    }

    console.log(`mode set to ${nextMode}`)
    return nextMode
  }

  useEffect(() => {
    console.log('timer useEffect called.')
    let countdown = null
    if (isTimerActive && timeLeft > 0) {
      console.log('timer is now running.')
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (isTimerActive && timeLeft === 0) {
      console.log('timer completed.')
      clearInterval(countdown)
    } else {
      console.log('timer is stopped.')
      clearInterval(countdown)
    }
    return () => {
      clearInterval(countdown)
    }
  }, [timeLeft, isTimerActive])

  console.log('Pomodoro rendered.')

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
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        isTimerActive={isTimerActive}
      />
    </main>
  )
}
