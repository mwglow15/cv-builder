import "../styles/editButton.css"

export default function EditButton({ editOn, handleEditToggle }) {
  if(editOn) {
    return(
      <button className="edit-button" onClick={handleEditToggle}>Generate CV</button>
    )
  } else {
    return(
      <button className="edit-button" onClick={handleEditToggle}>Edit Contents</button>
    )
  }
}