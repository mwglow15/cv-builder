import EducationFormSections from "./EducationFormSections"

export default function EducationForm({ educationInfo, handleChange }) {
  return(
    <>
      <p>Education</p>
      <form className="section-form education-form">
        {
          educationInfo.map((degree, index) => {
            return(<EducationFormSections info={degree} key={degree.id} handleChange={handleChange} index={index}></EducationFormSections>)
          })
        }
      </form>
    </>
  )
}