import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../images/logo1.jpg'
export default function Header() {
  const navigate=useNavigate();
  const click=()=>{
    navigate("/home")
  }
  return (
    <div className='d-flex p-2 justify-content-center  '>
           <div className='justify-content-center'>
            <img src={logo1} alt="" onClick={click}/>
           </div>
      
    </div>
  )
}
