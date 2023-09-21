import "../../styles/personalInfo.css"

export default function PersonalInfo({ personalInfo }) {
  return(
    <div className="info-section personal-info">
      <div>{personalInfo.firstName} { ' ' } {personalInfo.lastName} </div>
      <div className="contact-info">
        <div>{personalInfo.email}</div>
        <div>{personalInfo.phone}</div>
      </div>
    </div>
  )
}