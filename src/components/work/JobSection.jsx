export default function JobSection({ jobInfo }) {
  return(
    <div className='job-section'>
      <div className="job-title">{jobInfo.jobTitle}</div>
      <div className="job-info">{jobInfo.company}</div>
      {jobInfo.endDate ? (<div className="job-info date">{jobInfo.startDate} - {jobInfo.endDate}</div>) : (<div className="job-info date">{jobInfo.startDate}</div>)}
      <div className="job-description">{jobInfo.description}</div>
    </div>
  )
}

