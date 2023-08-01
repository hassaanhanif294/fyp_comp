const express = require("express");
const router=express.Router();
const multer = require('multer');
const path = require('path');
const fs= require('fs')
const axios = require("axios");
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const https = require("https");

async function gender_detection(img){
       const image = fs.readFileSync(path.join(__dirname + '/uploads/' + img), {
              encoding: 'base64'
            });
          
            try {
              const response = await axios({
                     method: "POST",
                     url: "https://detect.roboflow.com/gender-detection-qiyyg/2",
                     params: {
                         api_key: "pZZX1zQrkGsQ6jLU8ugU"
                     },
                     data: image,
                     headers: {
                         "Content-Type": "application/x-www-form-urlencoded"
                     }
                 });
          
              console.log(response.data.predictions[0].class);
              const clas = response.data.predictions[0].class;
              return clas;
            } catch (error) {
              console.log(error.message);
              throw error;
            }



}

async function ai_model(img) {
       const image = fs.readFileSync(path.join(__dirname + '/uploads/' + img), {
         encoding: 'base64'
       });
     
       try {
         const response = await axios({
           method: 'POST',
           url: 'https://detect.roboflow.com/mens-fashion/2',
           params: {
             api_key: 'pZZX1zQrkGsQ6jLU8ugU'
           },
           data: image,
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           }
         });
     
         console.log(response.data.predictions[0].class);
         const clas = response.data.predictions[0].class;
         return clas;
       } catch (error) {
         console.log(error.message);
         throw error;
       }
}

     
     
     
     
     
     


const storage = multer.diskStorage({
       destination: (req, file, cb) => {
         cb(null, 'uploads'); 
       },
       filename: (req, file, cb) => {
         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Set the file name to be saved with a unique name
       }
});

const upload = multer({ storage: storage });
    

router.post('/upload', upload.single('image'),async(req, res) => {
       if (!req.file) {
         return res.status(400).json({ error: 'No image file provided' });
       }
     
       // Process the uploaded image here (e.g., save it to a database, resize it, etc.)
   
       const a=await ai_model(req.file.filename)
       const gender= await gender_detection(req.file.filename)
       return res.status(200).json({ message: 'Image uploaded successfully', image_type:a, gender: gender});
       
});
     

router.get('/get', async (req, res) => {
       const searchQuery = req.query.q; // Get the search query from the request query parameters
     
       try {
         const browser = await puppeteer.launch();
         const page = await browser.newPage();
     
         // Login to Pinterest
         await page.goto('https://www.pinterest.com/login/');
         await page.waitForSelector('input[type="email"]');
         await page.type('input[type="email"]', 'hassaanhanif310@gmail.com'); // Replace 'your_username' with your actual Pinterest username
         await page.type('input[type="password"]', 'LionsDen@294'); // Replace 'your_password' with your actual Pinterest password
         await page.click('button[type="submit"]'); // Click the login button
         
         // Wait for successful login
         await page.waitForNavigation({ waitUntil: 'networkidle0' });
     
         // Navigate to the search results page
         await page.goto(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(searchQuery)}`);
         await page.waitForSelector('img[src^="https://i.pinimg.com/"]');
     
         const images = await page.$$eval('img[src^="https://i.pinimg.com/"]', elements => {
           return elements.map(element => {
             return {
               imageUrl: element.getAttribute('src'),
               altText: element.getAttribute('alt')
             };
           });
         });
     
         await browser.close();
     
         res.json(images);
       } catch (error) {
         console.error(error);
         res.status(500).send('An error occurred');
       }
     });


     router.get('/images', async (req, res) => {
      const searchQuery = req.query.q;
      try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        // Navigate to Google Images
        await page.goto('https://www.google.com/imghp');
    
        // Type the search query in the search input field

        await page.type('[name="q"]', searchQuery);
    
        // Press the Enter key to perform the search
        await page.keyboard.press('Enter');
    
        // Wait for the search results to load
        await page.waitForSelector('img[jsname="Q4LuWd"]');
    
        // Extract the image URLs from the search results
        const imageUrls = await page.$$eval('img[jsname="Q4LuWd"]', (images) =>
          images.slice(0, 10).map((image) => image.src)
        );
    
        // Close the browser
        await browser.close();
    
        res.json(imageUrls);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while retrieving Google Images');
      }
    });


module.exports=router