import Task from './Task'
import React from 'react'
export default function Tasks({ tasks }) {
  return (
    <div className='tasks-list'>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />
      })}
    </div>
  )
}
