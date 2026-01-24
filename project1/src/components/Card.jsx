const date = new Date();

function Card(props){
  console.log(props)

  return <div className='card'>
      <h2 className='cardTitle'>{props.titleText}</h2>
      <p className='cardDesc'>{props.descText}</p>
      <p className='cardFooter'>{"Date: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</p>
    </div>
}

export default Card;

