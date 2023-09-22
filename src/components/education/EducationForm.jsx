import EducationFormSections from "./EducationFormSections"

export default function EducationForm({ educationInfo, handleChange }) {
  return(
    <>
      <p className='heading'>Education</p>
      <form className="section-form education-form">
        {
          // returns a filled out form section for each degree in state
          educationInfo.map((degree, index) => {
            return(<EducationFormSections info={degree} key={degree.id} handleChange={handleChange} index={index}></EducationFormSections>)
          })
        }
      </form>
    </>
  )
}