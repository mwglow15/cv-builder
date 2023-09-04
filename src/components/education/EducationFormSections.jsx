import InputField from "../InputField"

export default function EducationFormSections({ info, handleChange, index }) {

  return(
    <div className="form-section education-form-section" id={info.id}>
      <p>School #{index + 1}</p>
      <InputField
        type='input'
        id='school'
        label='School'
        value={info.school}
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
        id='degree'
        label='Degree'
        value={info.degree}
        onChange={handleChange}
      />
      <InputField
        type='input'
        id='startDate'
        label='Start Date'
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
    </div>
  )
}