import React from 'react'
export function Modes({ currentMode }) {
  return (
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
  )
}
