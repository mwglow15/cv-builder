import EducationSection from './EducationSection'
import '../../styles/education.css'

export default function Education({ educationInfo }) {
  return(
    <div className="info-section education-info">
      <p className="heading">Education</p>
      {educationInfo.map(degree => <EducationSection degreeInfo={degree} key={degree.id}></EducationSection>)}
    </div>
  )
}