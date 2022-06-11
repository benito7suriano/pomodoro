import React from 'react'

export function Buttons({ toggleTimer, isTimerActive, resetTimer }) {
  console.log('Buttons rendered.')
  return (
    <div id='buttons-container'>
      <button className='btn' onClick={() => toggleTimer()}>
        {isTimerActive ? 'pause' : 'start'}
      </button>
      <button className='btn' onClick={() => resetTimer()}>
        reset
      </button>
    </div>
  )
}
