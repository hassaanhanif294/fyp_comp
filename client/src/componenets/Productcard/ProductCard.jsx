import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import productimg from 'D:/final-year-project/client/src/images/Red_NavyBlueCheckeredShirtBrumanoPakistan_1.jpg'
import {ImHeartBroken} from 'react-icons/im'
import {RiPagesLine} from 'react-icons/ri'
export default function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="m-3 shadow">
      <Card.Img variant="top" src={props.productimg} />
      <Card.Body>
        <Card.Title></Card.Title>

        <Button variant="border border-3" className='m-2 ' style={{backgroundColor:"rgba(248,153,61,255)"}}><ImHeartBroken/></Button>
        <Button variant="border border-3" className=' bg-info m-2 '><RiPagesLine/></Button>
      </Card.Body>
    </Card>

  )
}
