import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import Carousal from '../images/logo1.jpg';
import Carousal1 from '../images/logo2.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Signup() {
   let navigate=useNavigate();
   const [name,setName]=useState("");
   const [username,setUsername]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [repassword,setRepassword]=useState("");

   


  return (
    <div >
      <Container fluid>
         <Row className="vh-100">
                <Col style={{ backgroundImage: `url(${Carousal1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }} >
      
        
                </Col>

            
                <Col className='' lg={5}>
                          <Row className="vh-100 d-flex justify-content-center align-items-center">
                                      <Col md={8} lg={12} xs={12} className="border border-3 w-75 h-75 rounded-5 border-white shadow-lg" >
                                           
                                            <div className='d-flex justify-content-center mt-2'>
                                            <img src={Carousal} className="mt-2"/>
                                            </div>

                                            <div className='d-flex justify-content-start'>
                                                <p className='h2 text-success'>Signup</p>
                                            </div>

                                         <div >
                                           <form>
                                               <div className='form-group mt-1'>
                                                <label for="username"className=''>Enter your Name:</label><br/>
                                                <input id='username' type="text" className='form-control'onChange={e=>setName(e.target.value)}/>
                                                </div>

                                                <div className='form-group '>
                                                <label for="username"className=''>Enter your Username:</label><br/>
                                                <input id='username' type="text" className='form-control' onChange={e=>setUsername(e.target.value)}/>
                                                </div>

                                                <div className='form-group '>
                                                <label for="username"className=''>Enter your Email:</label><br/>
                                                <input id='username' type="email" className='form-control'onChange={e=>setEmail(e.target.value)}/>
                                                </div>

                                                
                                        
                                                <div className='form-group '>
                                                <label>Enter the Password:</label><br/>
                                                <input id='password' type="password" className='form-control'onChange={e=>setPassword(e.target.value)}  />
                                                </div>
                                                
                                                <div className='form-group '>
                                                <label>Repeat the Password:</label><br/>
                                                <input id='password' type="password" className='form-control' onChange={e=>setRepassword(e.target.value)}  />
                                                </div>

                                                <div className='form-group mt-2'>
                                                <input id="login" type="submit" className="bg-success form-control text-white" value="SignUp" />
                                                </div>
                                                <div className='form-group mt-2 mb-2 '>
                                                 <p className='d-inline'>Already a User?</p><a href="/Login" className="d-inline link-success">Login</a>
                                                </div>
                                        

                                           </form>
                                         </div>
   
                                          

                                      </Col>
                           </Row>
                </Col>
          </Row>
      </Container>
    </div>



  )
}
