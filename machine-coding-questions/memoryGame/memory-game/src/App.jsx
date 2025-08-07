import { useState } from 'react'
import './App.css'

function App() {
 const [gridSize,setGridSize]=useState(4);


  return (
    <div>
      <h1>Memory Game</h1>
      <label htmlFor="gridSize">Grid size: (max 10)</label>
      <input type="number" id="gridSize" min={2} max={10} value={gridSize} onChange={}
      className='border-2'/>
    </div>
  )
}

export default App
