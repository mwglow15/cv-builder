export default function EducationSection({ degreeInfo }) {
  return(
    <div className='degree-section'>
      <div className="school-name">{degreeInfo.school}</div>
      <div className="degree">{degreeInfo.degree}</div>
      <div>{degreeInfo.location}</div>
      {degreeInfo.endDate ? (<div className="school-date date">{degreeInfo.startDate} - {degreeInfo.endDate}</div>) : (<div className="school-date date">{degreeInfo.startDate}</div>)}
    </div>
  )
}