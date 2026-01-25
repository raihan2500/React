import React, {Component} from 'react';


class Card2 extends Component{
  render(){
    return (
      <div style={{color:"blue", backgroundColor: "wheat"}}>
        <h3>Hello from card2</h3>
        <h3>{this.props.name} </h3>
        <h3>{this.props.desc} </h3>
      </div>
    );
  }
}

export default Card2;