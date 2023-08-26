export default function EditButton(props) {
  if(props.editState) {
    return(
      <button onClick={props.onClick}>Submit</button>
    )
  } else {
    return(
      <button onClick={props.onClick}>Edit</button>
    )
  }
}