import React, { useState, useEffect } from 'react'
import { timer } from '../timer'

export default function Pomodoro({}) {
  const [currentMode, setCurrentMode] = useState('focus')
  const [timeLeft, setTimeLeft] = useState(timer[currentMode] * 60)
  const [isTimerActive, SetIsTimerActive] = useState(false)

  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  let minString = minutes.toString().padStart(2, '0')
  let secString = seconds.toString().padStart(2, '0')

  useEffect(() => {
    if (isTimerActive) {
      console.log('timer is now running.')
    } else {
      console.log('timer is now stopped.')
    }
  }, [isTimerActive])

  const toggleTimer = () => {
    SetIsTimerActive(!isTimerActive)
  }

  return (
    <main id='pomodoro-container'>
      <div id='mode-container'>
        <h5 className={`mode ${currentMode === 'focus' ? 'active' : ''}`}>
          focus
        </h5>
        <h5 className={`mode ${currentMode === 'shortBreak' ? 'active' : ''}`}>
          short break
        </h5>
        <h5 className={`mode ${currentMode === 'longBreak' ? 'active' : ''}`}>
          long break
        </h5>
      </div>
      <div id='countdown-container'>
        <h1 className='timer minutes'>{minString}</h1>
        <h1 className='timer colon'>:</h1>
        <h1 className='timer seconds'>{secString}</h1>
      </div>
      <div id='inspirational-container'>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet alias
          blanditiis nostrum eveniet pariatur rem quasi iure provident, expedita
          dolor.
        </h3>
        <p>-Naval Ravikant</p>
      </div>
      <div id='buttons-container'>
        <button className='btn' onClick={() => toggleTimer()}>
          {isTimerActive ? 'pause' : 'start'}
        </button>
        <button className='btn'>reset</button>
      </div>
    </main>
  )
}
