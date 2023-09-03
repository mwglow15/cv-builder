import InputField from "./InputField"

export default function WorkFormSections({ info, handleChange, index }) {

  return(
    <div className="form-section work-form-section" id={info.id}>
      <p>Job #{index + 1}</p>
      <InputField type='input' id='jobTitle' label='Job Title' value={info.jobTitle} onChange={handleChange}></InputField>
      <InputField type='input' id='company' label="Company" value={info.company} onChange={handleChange}></InputField>
      <InputField type='input' id='startDate' label='Start date' value={info.startDate} onChange={handleChange}></InputField>
      <InputField type='input' id='endDate' label='End Date' value={info.endDate} onChange={handleChange}></InputField>
      <InputField type='textarea' id='description' label='Description' value={info.description} onChange={handleChange}></InputField>
    </div>
  )
}