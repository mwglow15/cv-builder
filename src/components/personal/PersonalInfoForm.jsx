import InputField from '../InputField'

export default function PersonalInfoForm({ personalInfo, handleChange }) {



  return (
    <>
      <p>Personal Info</p>
      <form className="personalForm">
        <InputField id="firstName" label="First Name" value={personalInfo.firstName} onChange={handleChange} />
        <InputField id="lastName" label="Last Name" value={personalInfo.lastName} onChange={handleChange} />
        <InputField id="address" label="Address" value={personalInfo.address} onChange={handleChange} />
        <InputField id="email" label="E-mail" value={personalInfo.email} onChange={handleChange} />
        <InputField id="phone" label="Phone Number" value={personalInfo.phone} onChange={handleChange} />
      </form>
    </>
  )
}