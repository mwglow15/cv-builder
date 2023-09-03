export default function PersonalInfo({ personalInfo }) {
  return (
    <div className="info-section personal-info">
      <p>Personal Info</p>
      <div>{personalInfo.firstName} { ' ' } {personalInfo.lastName} </div>
      <div>{personalInfo.address}</div>
      <div>{personalInfo.email}</div>
      <div>{personalInfo.phone}</div>
    </div>
  )
}