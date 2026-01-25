import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 1,        
    }
  }
  
  Increment = () => {
    this.setState({
      count: this.state.count + 2,
      
    })
  }

  Decrement = () =>{
    this.setState({
      count: this.state.count - 1,
    })
  }


  
  render() {
    const {count} = this.state;
    return (
      
      <div>
        <h1> Count: {count} </h1>
        <button onClick={this.Increment} style={{margin:"20px"}}>+</button>
        <button onClick={this.Decrement} disabled={count === 0 ? true : false} style={{margin:"20px"}}>-</button>
        
      </div>
    )
  }
}
