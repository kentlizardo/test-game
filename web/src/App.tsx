import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import { socket } from './socket'
import './App.css'

import viteLogo from '/vite.svg'

function App() {
  const [isConnected, setConnected] = useState(socket.connected)

  useEffect(() => {
    function onConnect() {
      setConnected(true)
    }

    function onDisconnect() {
      setConnected(false)
    }

    function fooMethod() {
      console.log('foo!')
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', fooMethod)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onDisconnect)
    }
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <>
          {isConnected && <p>Connected!</p>}
          <button
            onClick={() => {
              socket.connect()
            }}
          >
            Connect
          </button>
          <button
            onClick={() => {
              socket.disconnect()
            }}
          >
            Disconnect
          </button>
        </>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
