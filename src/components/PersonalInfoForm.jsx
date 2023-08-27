/* eslint-disable react/prop-types */
export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {

  function handleChange(e){
    e.preventDefault()
    console.log(e)
    setPersonalInfo(e.target.value) // 
  }

  return (
    <div className="personalForm">
      <InputField id="firstName" value={personalInfo} onChange={handleChange} />
    </div>
  )
}

function InputField({ id, value, onChange }) {

  return (
      <label>First Name
        <input id={id} value={value} onChange={onChange} />
      </label>
  )
}