import Task from './Task'
import React, { useEffect } from 'react'
export default function Tasks({ tasks }) {
  console.log('tasks rendered.')
  console.log('tasks:', tasks)
  return (
    <div className='tasks-list'>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />
      })}
    </div>
  )
}
