import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Navbar from './Navbar';

export default function Recommendation() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const gender = formData.get('gender');
    const event = formData.get('event');
    const color = formData.get('color');
    const type = formData.get('type');

    navigate(`/recommendation/${gender}/${event}/${color}/${type}`);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Container className="shadow">
        <Row>
          <p className="h1 text-success mt-4">Recommendation Form</p>
        </Row>
        <hr />
        <Row className="m-4">
          <Container className="m-2 border border-2 rounded-2">
            <form onSubmit={handleSubmit}>
              <div className="m-2">
                <label className="text-success m-3">Select Your Gender: </label>
                <select className="border-warning rounded-2 p-2 text-success" name="gender">
                  <option className="text-warning">Select</option>
                  <option className="text-warning">Men</option>
                  <option className="text-warning">Women</option>
                </select>
              </div>
              <br />
              <div className="m-2">
                <label className="text-success m-3">Select Your Event: </label>
                <select className="border-warning rounded-2 p-2 text-success" name="event">
                  <option className="text-warning">Select</option>
                  <option className="text-warning">Shaadi</option>
                  <option className="text-warning">Walima</option>
                  <option className="text-warning">Birthday</option>
                  <option className="text-warning">Travelling</option>
                </select>
              </div>
              <br />
              <div className="m-2">
                <label className="text-success m-3">Select Your Color: </label>
                <select className="border-warning rounded-2 p-2 text-success" name="color">
                  <option className="text-warning">Select</option>
                  <option className="text-warning">Black</option>
                  <option className="text-warning">Blue</option>
                  <option className="text-warning">Maroon</option>
                  <option className="text-warning">LightBlue</option>
                </select>
              </div>
              <br />
              <div className="m-2">
                <label className="text-success m-3">Select Your Clothing Type: </label>
                <select className="border-warning rounded-2 p-2 text-success" name="type">
                  <option className="text-warning">Select</option>
                  <option className="text-warning">Shalwar Qameez</option>
                  <option className="text-warning">Waist Coat</option>
                  <option className="text-warning">Jeans</option>
                  <option className="text-warning">Sarhi</option>
                </select>
              </div>
              <br />
              <div className="m-2">
                <Button type="submit" variant="warning" className="text-success border-warning p-2 border border-2 rounded-2">
                  Recommendation
                </Button>
              </div>
            </form>
          </Container>
        </Row>
      </Container>
    </div>
  );
}
