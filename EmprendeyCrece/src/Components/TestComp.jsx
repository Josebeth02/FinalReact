import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Card, Badge, Button } from "react-bootstrap"

import "../Style/Test.css"
 


function TestCompo() {
  return (
    <div>

      <h1>Mejores ofertas</h1>

   <Card className='carrousel-cards'>

   <Card>
        <Card.Header className='img1'>
          <Badge>New</Badge>
        </Card.Header>

        
          
        <Card.Body>
        <Card.Title>₡7.000</Card.Title>
        <Button>Comprar</Button>
        </Card.Body>
    </Card>

    <Card>
        <Card.Header className='img2'>
          <Badge>New</Badge>
        </Card.Header>

        
          
        <Card.Body>
        <Card.Title>₡7.000</Card.Title>
        <Button>Comprar</Button>
        </Card.Body>
    </Card>

    <Card>
        <Card.Header className='img3'>
          <Badge>New</Badge>
        </Card.Header>

        
          
        <Card.Body>
        <Card.Title>₡7.000</Card.Title>
        <Button>Comprar</Button>
        </Card.Body>
    </Card>


    <Card>
        <Card.Header className='img4'>
          <Badge>New</Badge>
        </Card.Header>

        
          
        <Card.Body>
        <Card.Title>₡7.000</Card.Title>
        <Button>Comprar</Button>
        </Card.Body>
    </Card>



    <Card>
        <Card.Header className='img5'>
          <Badge>New</Badge>
        </Card.Header>

        
          
        <Card.Body>
        <Card.Title>₡7.000</Card.Title>
        <Button>Comprar</Button>
        </Card.Body>
    </Card>

   </Card>

    </div>
  )
}

export default TestCompo;