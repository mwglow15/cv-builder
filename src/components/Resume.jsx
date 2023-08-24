import { useState } from "react"
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import WorkExperience from './WorkExperience.jsx'
import EditButton from './EditButton.jsx'

export default function Resume() {
  const [editOn, setEditOn] = useState(true)

  function handleEditToggle() {
    if (editOn) {
      setEditOn(false)
    } else {
      setEditOn(true)
    }
  }
  
  return(
    <>
      <EditButton onClick={handleEditToggle} />
      <PersonalInfo editState={editOn}/>
      <Education editState={editOn}/>
      <WorkExperience editState={editOn}/>
    </>
  )
}