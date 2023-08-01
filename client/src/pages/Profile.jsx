import React from 'react'

import { useState } from 'react';
import Header from './Header'
import Navbar from './Navbar'
const UserProfilePage = () => {
  const [name, setName] = useState('John Smith');
  const [email, setEmail] = useState('john.smith@example.com');
  const [location, setLocation] = useState('New York City, USA');
  const [interests, setInterests] = useState('Hiking, reading, traveling');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the updated user information to the server
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <label>
          Interests:
          <textarea value={interests} onChange={handleInterestsChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default function Profile() {
  return (
    <div className='d-flex flex-column'>
    <Header />
    <Navbar />
    <UserProfilePage/>
    </div>

  )
}
