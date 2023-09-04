export default function EducationSection({ degreeInfo }) {
  return(
    <div className='degree-section'>
      <div>{degreeInfo.school}</div>
      <div>{degreeInfo.location}</div>
      <div>{degreeInfo.degree}</div>
      <div>{degreeInfo.startDate}</div>
      <div>{degreeInfo.endDate}</div>
    </div>
  )
}