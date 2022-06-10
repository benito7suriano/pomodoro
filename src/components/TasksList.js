import Tasks from './Tasks'
import React from 'react'
export default function TasksList({}) {
  return (
    <div id='tasks-list-container'>
      <div className='tasks-list-header'>
        <h1>Tasks</h1>
        <span className='plus-container'>
          <i className='fa-solid fa-plus fa-xl'></i>
        </span>
      </div>
      <Tasks />
    </div>
  )
}
