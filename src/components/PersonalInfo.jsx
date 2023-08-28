/* eslint-disable react/prop-types */
export default function PersonalInfo({ personalInfo }) {
  return (
    <>
      <div>{personalInfo.firstName + ' ' + personalInfo.lastName} </div>
      <div>{personalInfo.address}</div>
      <div>{personalInfo.email}</div>
      <div>{personalInfo.phone}</div>
    </>
  )
}