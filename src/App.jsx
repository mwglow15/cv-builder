import { useState } from "react"
import './App.css'
import Resume from './components/Resume.jsx'
import EditButton from './components/EditButton.jsx'

function App() {
  const [editOn, setEditOn] = useState(true)

  //
  // Toggles and sets state for the edit state
  //
  function handleEditToggle() {
    if (editOn) {
      setEditOn(false)
    } else {
      setEditOn(true)
    }
  }

  return (
    <div className="app">
      <EditButton editOn={editOn} handleEditToggle={handleEditToggle} />
      <Resume editOn={editOn} />
    </div>
  )
}

export default App
