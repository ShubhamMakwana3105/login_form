import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="main">
        <h2>Welcome to page</h2>
        <form className="form">
          <div className="secson1">
            <label >username</label>
            <br />
            <input
              type="text"
              placeholder=" username"
              required
            />
          </div>

          <div className="secson2">
            <label >email</label>
            <br />
            <input
              type="email"
              placeholder=" email"
              required
            />
          </div>

          <div className="secson3">
            <label >passoword</label>
            <br />
            <input
              type="password"
              placeholder=" password"
              required
            />
          </div>

        <div className="btn">
          <button className="btn">login</button>
        </div>
        </form>
      </main>      

    </>
  )
}

export default App
