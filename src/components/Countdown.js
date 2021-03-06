import React, { useEffect } from 'react'
import { timer } from '../timer'
export function Countdown({
  timeLeft,
  setTimeLeft,
  switchMode,
  currentMode,
  count,
  setCount,
  setCurrentMode,
  updateTasks,
}) {
  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  let minString = minutes.toString().padStart(2, '0')
  let secString = seconds.toString().padStart(2, '0')

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentMode === 'focus') {
        setCount(count + 1)
        updateTasks()
      }
      setCurrentMode(switchMode(currentMode, count))
      setTimeLeft(timer[currentMode] * 60)
    }
  })

  return (
    <div id='countdown-container'>
      <h1 className='timer minutes'>{minString}</h1>
      <h1 className='timer colon'>:</h1>
      <h1 className='timer seconds'>{secString}</h1>
    </div>
  )
}
