import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import PersonalInfo from './personal/PersonalInfo.jsx'
import Education from './education/Education.jsx'
import WorkExperience from './work/WorkExperience.jsx'
import EditButton from './EditButton.jsx'
import PersonalInfoForm from "./personal/PersonalInfoForm.jsx"
import WorkExperienceForm from "./work/WorkExperienceForm.jsx"
import EducationForm from "./education/EducationForm.jsx"
import exampleData from "./exampleData.js"

export default function Resume() {
  const [editOn, setEditOn] = useState(true)
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState(exampleData.education)
  const [workExperienceInfo, setWorkExperienceInfo] = useState(exampleData.workExperience)

  // Toggles and sets state for the edit state
  function handleEditToggle() {
    if (editOn) {
      setEditOn(false)
    } else {
      setEditOn(true)
    }
  }

  // Spreads the existing personalInfo data and adds the new value to state
  function handlePersonalInfoChange(e){
    e.preventDefault()
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value } ) // 
  }

  function handleWorkExperienceChange(e) {
    e.preventDefault()

    const value = e.target.value
    const jobSection = e.target.closest('.work-form-section')
    const id = jobSection.id
    const updatedField = e.target.id

    // Looks for the specific job and field that has been updated and sets the new value
    let updatedJob = workExperienceInfo.map(job => {
      if(job.id === id) job[updatedField] = value
      return job
    })

    setWorkExperienceInfo(updatedJob)
  }

  function handleEducationChange(e) {
    e.preventDefault()

    const value = e.target.value
    const degreeSection = e.target.closest('.education-form-section')
    const id = degreeSection.id
    const updatedField = e.target.id

    // Looks for the specific degree and entry field that was updated and sets the new value
    let updatedDegree = educationInfo.map(degree => {
      if(degree.id === id) degree[updatedField] = value
      return degree
    })

    setEducationInfo(updatedDegree)
  }

  return (
    <>
      <EditButton editState={editOn} handleEditToggle={handleEditToggle} />

    {editOn ? (
      <>
        <PersonalInfoForm 
          personalInfo={personalInfo} 
          handleChange={handlePersonalInfoChange}
        />
        <WorkExperienceForm 
          workExperienceInfo={workExperienceInfo} 
          handleChange={handleWorkExperienceChange}
        />
        <EducationForm 
          educationInfo={educationInfo}
          handleChange={handleEducationChange}
        />
      </>
    ) : (
      <>
        <PersonalInfo personalInfo={personalInfo}/>
        <WorkExperience workExperience={workExperienceInfo} />
        <Education educationInfo={educationInfo}/>
      </>
    )

    }
  </>
  ) 
}