import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function ReactBootstrap() {
  return (
    <div>
      <Card style={{backgroundColor:"gray"}}>
        <h1  >Card Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas labore totam veritatis eos sint.
        </p>
        <Button>Learn more</Button>
      </Card>

      <Card>
        <Card.Body>
          <h1  >Card Body</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas labore totam veritatis eos sint.
        </p>
        <Button>Button</Button>

        </Card.Body>
      </Card>
    </div>
  )
}
