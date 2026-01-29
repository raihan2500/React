import React, { Component } from 'react'
import Homepage from './Homepage'
import LoginPage from './LoginPage'


export default class Conditional_Rendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn:true,
    }
  }
  
  render() {
    let element;
    if(this.isLoggedIn){
      element = <Homepage/>
    }else{
      element = <LoginPage/>
    }
    return (
      <div>
        {element}
      </div>
    )
  }
}
