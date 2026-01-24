const date = new Date();

//Desctructuring Example. 
const arr = ["Raihan", "Elon Mask"];
const [raihan, elon] = arr
console.log(raihan)


function Card(props){
  const {titleText, descText} = props;

  return <div className='card'>
      <h2 className='cardTitle'>{titleText}</h2>
      <p className='cardDesc'>{descText}</p>
      <p className='cardFooter'>{"Date: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</p>
    </div>
}

export default Card;

