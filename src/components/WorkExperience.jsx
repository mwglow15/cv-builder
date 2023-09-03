import JobSection from './JobSection'

export default function WorkExperience({ workExperience }) {
  return(
    <div className="info-section work-experience">
      <p>Work Experience</p>
      {workExperience.map(job => <JobSection jobInfo={job} key={job.id} ></JobSection>)}
      
    </div>
  )
}
