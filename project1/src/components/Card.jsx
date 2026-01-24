const todoTitle = "Call Family";
const date = new Date();
const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, facere incidunt. Eveniet, enim unde nulla porro facere quae dolorum rem optio rerum ea quidem molestiae perferendis error accusantium necessitatibus voluptas."

function Card(){

  return <div className='card'>
      <h2 className='cardTitle'>{todoTitle}</h2>
      <p className='cardDesc'>{desc}</p>
      <p className='cardFooter'>{"Date: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</p>
    </div>
}

export default Card;

