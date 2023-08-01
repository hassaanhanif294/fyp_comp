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
export default function Login() {
   let navigate=useNavigate();
   const home=()=>{
    navigate("/home")
   }
   const [username,setUsername]=useState();
   const [password,setPassword]=useState();




  return (
    <div >
      <Container fluid>
         <Row className="vh-100">
                <Col style={{ backgroundImage: `url(${Carousal1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }} >
      
        
                </Col>

            
                <Col className='' lg={5}>
                          <Row className="vh-100 d-flex justify-content-center align-items-center">
                                      <Col md={8} lg={12} xs={12} className="border border-3 w-75 h-75 rounded-5 border-white shadow-lg" >
                                           
                                            <div className='d-flex justify-content-center mt-5'>
                                            <img src={Carousal} className="mt-2"/>
                                            </div>

                                            <div className='d-flex justify-content-start'>
                                                <p className='h2 text-success'>Login</p>
                                            </div>

                                         <div >
                                           <form>
                                                <div className='form-group mt-3'>
                                                <label for="username"className=''>Enter the Username:</label><br/>
                                                <input id='username' type="text" className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
                                                </div>
                                        
                                                <div className='form-group mt-3'>
                                                <label>Enter the Password:</label><br/>
                                                <input id='password' type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} />
                                                <a href="/forgetpassword" class="link-success">Forget the Password?</a>
                                                </div>

                                                <div className='form-group mt-3'>
                                                <input id="login" type="submit" className="bg-success text-white form-control" value="login" onClick={home} />
                                                </div>
                                                <div className='form-group mt-2 '>
                                                 <p className='d-inline'>Dont't have an Account?</p><a href="/signup" className="d-inline link-success">SignUp</a>
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
