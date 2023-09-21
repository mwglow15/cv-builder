export default function JobSection({ jobInfo }) {
  return(
    <div className='job-section'>
      <div>{jobInfo.jobTitle}</div>
      <div>{jobInfo.company}</div>
      {jobInfo.endDate ? (<div>{jobInfo.startDate} - {jobInfo.endDate}</div>) : (<div>{jobInfo.startDate}</div>)}
      <div>{jobInfo.description}</div>
    </div>
  )
}

