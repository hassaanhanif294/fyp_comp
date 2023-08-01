import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Navbar from './Navbar';
import { ImHeartBroken } from 'react-icons/im';
import { RiPagesLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
const axios = require("axios");
export default function RecomForm() {
  const [b, setB] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch(`http://localhost:8080/recommendation/images?q=${params.gender} ${params.type} of ${params.color} color for ${params.event}`);
        
        if (response.ok) {
          console.log('Data fetched successfully.');
          const data = await response.json();
          setB(data);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchData();
  }, [params.gender,params.event,params.color,params.type]);
  // async function add_favourites(index){
  //   try {
  //     const response = await axios({
  //            method: "POST",
  //            url: "http://localhost:8080/favourites/add",
  //            params: {
  //                url: b[index],
  //                username:"hassaan",
  //                attribute:`${params.gender} ${params.gender} ${params.color} ${params.event}`
  //            },
  //            headers: {
  //                "Content-Type": "application/x-www-form-urlencoded"
  //            }
  //        });
  //   } catch (error) {
  //     console.log(error.message);
  //     throw error;
  //   }

  // }
  return (
    <div>
      <Header />
      <Navbar />
      
      <Container className="shadow">
        <Row>
          <p className="h1 text-success">Your Output</p>
        </Row>
        <hr />
        <Container>
          <Row>
            
            
            {b.map((item,index) => (
              <Card style={{ width: '18rem' }} className="m-3 shadow" key={index}>
                <Card.Img variant="top" src={item} />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Button variant="border border-3" className="m-2" style={{ backgroundColor: 'rgba(248,153,61,255)' }} >
                    <ImHeartBroken />
                  </Button>
                  <Button variant="border border-3 bg-info m-2">
                    <RiPagesLine />
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
