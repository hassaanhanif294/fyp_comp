var express= require('express');

var router= express.Router();
var User=require('./database_schemas/user_schemas')

// Add a new user to the 'user_details' collection
router.post('/users', async (req, res) => {
    const userData = {
        name: 'John Doe',
        username: 'jonndoe',
        email: 'johhd@example.com',
        password: 'password123'
      }; // Assuming the request body contains the user data
    try {
        const existingUser = await User.findOne({ email: userData.email });
    
        if (existingUser) {
          return res.status(409).json({ error: 'Email already exists' });
        }
    
        const newUser = new User(userData);
        const savedUser = await newUser.save();
    
        res.status(201).json(savedUser);
      } catch (error) {
        console.error('Error creating user', error);
        res.status(500).json({ error: 'Server error' });
      }
  });
  


module.exports=router