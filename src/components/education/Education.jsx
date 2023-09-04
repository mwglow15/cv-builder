import EducationSection from './EducationSection'

export default function Education({ educationInfo }) {
  return(
    <div className="info-section education-info">
    {educationInfo.map(degree => <EducationSection degreeInfo={degree} key={degree.id}></EducationSection>)}
    </div>
  )
}