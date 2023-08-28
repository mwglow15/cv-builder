/* eslint-disable react/prop-types */
export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {

  function handleChange(e){
    e.preventDefault()
    console.log(e)
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value } ) // 
  }

  return (
    <div className="personalForm">
      <InputField id="firstName" label="First Name" value={personalInfo.firstName} onChange={handleChange} />
      <InputField id="lastName" label="Last Name" value={personalInfo.lastName} onChange={handleChange} />
      <InputField id="address" label="Address" value={personalInfo.address} onChange={handleChange} />
      <InputField id="email" label="E-mail" value={personalInfo.email} onChange={handleChange} />
      <InputField id="phone" label="Phone Number" value={personalInfo.phone} onChange={handleChange} />
    </div>
  )
}

function InputField({ id, label, value, onChange }) {

  return (
      <label>{label}
        <input id={id} value={value} onChange={onChange} />
      </label>
  )
}