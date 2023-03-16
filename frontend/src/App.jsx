import { useState } from 'react'
import { Form } from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>API ejercicio</h1>
      <Form />
    </div>
  )
}

export default App
