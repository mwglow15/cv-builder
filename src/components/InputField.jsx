export default function InputField({ id, label, value, onChange, type }) {

  return (
    <div className="inputGroup">
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={id} value={value} onChange={onChange} />
      ) : (
        <input id={id} value={value} onChange={onChange} cols="50"/>
      )}
      
    </div>
  )
}