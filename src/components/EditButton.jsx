export default function EditButton({ editState, handleEditToggle }) {
  if(editState) {
    return(
      <button onClick={handleEditToggle}>Submit</button>
    )
  } else {
    return(
      <button onClick={handleEditToggle}>Edit</button>
    )
  }
}