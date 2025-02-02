import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [currentCookie, setCurrentCookie] = useState(document.cookie)

  const setCookie = (value: string) => {
    document.cookie = value;
    setCurrentCookie(document.cookie);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="cookie">
        <div className="cookie-example">
          <p>Cookie Value Example</p>
          <code>KEY=VALUE; Max-Age=100;</code>
        </div>
        <p>Current Cookie</p>
        <code>{currentCookie}</code>
        <div>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
          <button onClick={() => setCookie(inputValue)}>Set Cookie</button>
        </div>
        
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
