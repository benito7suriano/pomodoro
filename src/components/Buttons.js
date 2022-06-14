import React, { useEffect } from 'react'

export function Buttons({
  toggleTimer,
  isTimerActive,
  resetTimer,
  displayAlert,
  setDisplayAlert,
}) {
  useEffect(() => {
    let showModal = setTimeout(() => {
      setDisplayAlert(false)
    }, 3000)

    return () => {
      clearTimeout(showModal)
    }
  }, [displayAlert, setDisplayAlert])

  return (
    <div id='buttons-container'>
      <div className='buttons'>
        <button className='btn' onClick={() => toggleTimer()}>
          {isTimerActive ? 'pause' : 'start'}
        </button>
        <button className='btn' onClick={() => resetTimer()}>
          reset
        </button>
      </div>
    </div>
  )
}
