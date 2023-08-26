import { useState } from "react"
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import WorkExperience from './WorkExperience.jsx'
import EditButton from './EditButton.jsx'
import PersonalInfoForm from "./PersonalInfoForm.jsx"
import WorkExperienceForm from "./WorkExperienceForm.jsx"
import EducationForm from "./EducationForm.jsx"

export default function Resume() {
  const [editOn, setEditOn] = useState(true)
  const [personalInfo, setPersonalInfo] = useState('')
  const [educationInfo, setEducationInfo] = useState('')
  const [workExperienceInfo, setWorkExperienceInfo] = useState('')

  function handleEditToggle() {
    if (editOn) {
      setEditOn(false)
    } else {
      setEditOn(true)
    }
  }

  

  function ToggleFormView() {
    if (editOn) {
      return(
        <>
          <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
          <WorkExperienceForm workExperienceInfo={workExperienceInfo} setWorkExperienceInfo={setWorkExperienceInfo}/>
          <EducationForm educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        </>
      )
    } else {
      return(
        <>
          <PersonalInfo personalInfo={personalInfo} />
          <WorkExperience workExperienceInfo={workExperienceInfo} />
          <Education educationInfo={educationInfo} />
        </>
      )
    }
  }

  return(
    <>
      <EditButton editState={editOn} onClick={handleEditToggle} />

      <ToggleFormView />
    </>
  )
}