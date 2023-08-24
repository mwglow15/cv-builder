import { useState } from "react"
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import WorkExperience from './WorkExperience.jsx'

export default function Resume(props) {
  const prop = props

  return(
    <>
      <PersonalInfo />
      <Education />
      <WorkExperience />
    </>
  )
}