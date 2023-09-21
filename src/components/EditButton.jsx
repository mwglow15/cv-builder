import "../styles/editButton.css"

export default function EditButton({ editOn, handleEditToggle }) {
  if(editOn) {
    return(
      <button onClick={handleEditToggle}>Generate CV</button>
    )
  } else {
    return(
      <button onClick={handleEditToggle}>Edit Contents</button>
    )
  }
}