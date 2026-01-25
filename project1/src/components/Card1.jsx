
//This is a functional component.

function Card1(props){
  return (
    <div style={{backgroundColor:"pink", color:"black"}}>
      <h3>{props.name}</h3>
      <p> {props.desc} </p>
    </div>
  );
}

export default Card1;