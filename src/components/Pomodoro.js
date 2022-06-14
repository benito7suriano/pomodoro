import { Buttons } from './Buttons'
import { InspirationalQuote } from './InspirationalQuote'
import { Countdown } from './Countdown'
import { Modes } from './Modes'
import Alert from '@mui/material/Alert'

export default function Pomodoro({
  timeLeft,
  setTimeLeft,
  toggleTimer,
  resetTimer,
  displayAlert,
  setDisplayAlert,
  switchMode,
  currentMode,
  setCurrentMode,
  isTimerActive,
  count,
  setCount,
  handleToggle,
  updateTasks,
}) {
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
        handleToggle={handleToggle}
        updateTasks={updateTasks}
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
