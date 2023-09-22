import JobSection from './JobSection'
import "../../styles/workExperience.css"

export default function WorkExperience({ workExperience }) {
  return(
    <div className="info-section work-experience">
      <p className='heading'>Work Experience</p>
      {workExperience.map(job => <JobSection jobInfo={job} key={job.id} ></JobSection>)}
      
    </div>
  )
}
