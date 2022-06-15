import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
export default function DateAndTime({}) {
  const [today, setToday] = useState(dayjs().format(`ddd, MMM d`))
  const [hour, setHour] = useState(dayjs().format('HH'))
  const [minute, setMinute] = useState(dayjs().format('mm'))

  useEffect(() => {
    const timeId = setInterval(() => {
      setToday(dayjs().format(`ddd, MMM d`))
      setHour(dayjs().format('HH'))
      setMinute(dayjs().format('mm'))
    }, 500)

    return () => {
      clearInterval(timeId)
    }
  }, [])

  return (
    <div id='date-and-time-container'>
      <h1>{today}</h1>
      <h3>
        {hour}:{minute}
      </h3>
    </div>
  )
}
