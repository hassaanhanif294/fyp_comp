var express = require('express');
var router = express.Router();
var Favourites=require('./database_schemas/favourite_schema')
router.get('/get', function(req, res){
   res.send('get favourties of user');
});
router.post('/add',async (req, res)=>{
      const favourite={
         image_url: req.params.url,
         username:req.params.username,
         clothing_attributes: req.params.attributes
      }
      try {
         const existingUser = await Favourites.findOne({ email: favourite.username });
     
         if (existingUser) {
           return res.status(409).json({ error: 'Email already exists' });
         }
     
         const newUser = new Favourites(favourite);
         const savedUser = await newUser.save();
     
         res.status(201).json(savedUser);
       } catch (error) {
         console.error('Error creating user', error);
         res.status(500).json({ error: 'Server error' });
       }
   
});

//export this router to use in our index.js
module.exports = router;