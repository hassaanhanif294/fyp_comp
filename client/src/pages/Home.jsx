import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CAROUSAL from "../images/logo2.jpg"
import Header from './Header'
import Navbar from './Navbar'
import Carousal from '../componenets/carousal/Carousal'
export default function Home() {
  return (
    <div className='d-flex flex-column'>
    <Header />
    <Navbar />
    <Carousal />
    </div>

  )
}
