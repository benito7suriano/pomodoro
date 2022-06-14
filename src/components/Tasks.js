import Task from './Task'
import React, { useEffect } from 'react'
export default function Tasks({ tasks }) {
  console.log('tasks rendered.')
  useEffect(() => {
    let newTasks = tasks
    console.log('tasks:', tasks)
    console.log('newTasks', newTasks)
  }, [tasks])
  return (
    <div className='tasks-list'>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />
      })}
    </div>
  )
}
