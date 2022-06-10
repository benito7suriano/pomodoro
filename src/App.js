import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <main id='main-container'>
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
            blanditiis nostrum eveniet pariatur rem quasi iure provident,
            expedita dolor.
          </h3>
          <p>-Naval Ravikant</p>
        </div>
        <div id='buttons-container'>
          <button className='btn'>start</button>
          <button className='btn'>reset</button>
        </div>
      </main>
      <aside id='sidebar'>
        <div id='date-and-time-container'>
          <h1>Mon, June 5th</h1>
          <h3>14:44</h3>
        </div>
        <div id='tasks-list-container'>
          <div className='tasks-list-header'>
            <h1>Tasks</h1>
            <span className='plus-container'>
              <i className='fa-solid fa-plus fa-xl'></i>
            </span>
          </div>
          <div className='tasks-list'>
            <div className='task done'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task active'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
            <div className='task'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, adipisci!
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default App
