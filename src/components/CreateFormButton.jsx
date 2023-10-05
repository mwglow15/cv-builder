import '../styles/createFormButton.css'

export default function CreateFormButton({ onclick, text }) {
  return(
    <button className="new-form" onClick={onclick}>
      <i className="fa-solid fa-plus"></i>
      {text}
    </button>
  )
}