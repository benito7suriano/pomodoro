import React, { useState, useEffect } from 'react'

export default function Pomodoro({}) {
  return (
    <main id='pomodoro-container'>
      <div id='mode-container'>
        <h5 className='mode active'>focus</h5>
        <h5 className='mode'>short break</h5>
        <h5 className='mode'>long break</h5>
      </div>
      <div id='countdown-container'>
        <h1 className='timer minutes'>25</h1>
        <h1 className='timer colon'>:</h1>
        <h1 className='timer seconds'>00</h1>
      </div>
      <div id='inspirational-container'>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet alias
          blanditiis nostrum eveniet pariatur rem quasi iure provident, expedita
          dolor.
        </h3>
        <p>-Naval Ravikant</p>
      </div>
      <div id='buttons-container'>
        <button className='btn'>start</button>
        <button className='btn'>reset</button>
      </div>
    </main>
  )
}
