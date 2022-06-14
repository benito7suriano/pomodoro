import TasksList from './TasksList'
import DateAndTime from './DateAndTime'
import React from 'react'

export default function Sidebar({ tasks, setTasks, setAreTasksPending }) {
  return (
    <aside id='sidebar'>
      <DateAndTime />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        setAreTasksPending={setAreTasksPending}
      />
    </aside>
  )
}
