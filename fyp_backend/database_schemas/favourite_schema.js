const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
  image_url:{
     type:String,
     required:true,
  },
  username: {
    type: String,
    required: true,
  },

  clothing_attributes:{
    type: String,
    required: true
  }
});

const Favourites = mongoose.model('user_favourites', favouriteSchema);

module.exports = Favourites;