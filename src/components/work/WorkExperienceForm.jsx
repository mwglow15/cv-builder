import WorkFormSections from "./WorkFormSections"
import CreateFormButton from "../CreateFormButton"
import '../../styles/workExperience.css'

export default function WorkExperienceForm({ workExperienceInfo, handleChange, newWorkExperience }) {
  return(
    <>
      <p className='heading'>Work Experience</p>
      <form className="section-form work-form">
        { // returns a filled out form section for each job in state
          workExperienceInfo.map((job, index) => {
            return(<WorkFormSections info={job} key={job.id} handleChange={handleChange} index={index}></WorkFormSections>)
          })
        }
      </form>
      <CreateFormButton onclick={newWorkExperience} text='Experience' />
    </>
  )
}