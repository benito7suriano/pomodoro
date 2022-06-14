import React from 'react'
export default function Task({ task }) {
  let { name, status } = task
  return (
    <div className={`task ${status}`}>
      <p>{name}</p>
    </div>
  )
}
