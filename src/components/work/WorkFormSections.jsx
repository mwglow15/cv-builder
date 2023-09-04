import InputField from "../InputField"

export default function WorkFormSections({ info, handleChange, index }) {

  return(
    <div className="form-section work-form-section" id={info.id}>
      <p>Job #{index + 1}</p>
      <InputField
        type='input'
        id='jobTitle'
        label='Job Title'
        value={info.jobTitle}
        onChange={handleChange}
      />
      <InputField
        type='input'
        id='location'
        label='Location'
        value={info.location}
        onChange={handleChange}
      />
      <InputField
        type='input'
        id='company'
        label="Company"
        value={info.company}
        onChange={handleChange}
      />
      <InputField
        type='input'
        id='startDate'
        label='Start date'
        value={info.startDate}
        onChange={handleChange}
      />
      <InputField
        type='input'
        id='endDate'
        label='End Date'
        value={info.endDate}
        onChange={handleChange}
      />
      <InputField
        type='textarea'
        id='description'
        label='Description'
        value={info.description}
        onChange={handleChange}
      />
    </div>
  )
}