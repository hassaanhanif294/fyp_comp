var express = require("express");
var router= express.Router();
var User=require('./database_schemas/user_schemas')



router.post('/users',async (req, res) => {
    const userData={
        username: 'jonndoe',
        password: 'password123'
    }
  
    try {
        const user = await User.findOne({ username: userData.username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (user.password !== userData.password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

router.post('/admin', function(req,res){
    res.send('admin is authenticated');
})

module.exports = router;