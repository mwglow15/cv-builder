import WorkFormSections from "./WorkFormSections"

export default function WorkExperienceForm({ workExperienceInfo, handleChange }) {
  return(
    <>
      <p>Work Experience</p>
      <form className="section-form work-form">
        {
          workExperienceInfo.map((job, index) => {
            return(<WorkFormSections info={job} key={job.id} handleChange={handleChange} index={index}></WorkFormSections>)
          })
        }
      </form>
    </>
  )
}