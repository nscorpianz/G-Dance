const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 5000;

// express specific stuff
// app.use(express.static('static', options));
app.use('/static', express.static('static')); // for server static files
app.use(express.urlencoded());

// PUG specific stuff
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the view directory

// EndPoints
app.get('/', (req, res)=>{    
    const params = {};
    res.status(200).render('index.pug', params);
});

// Start the server
app.listen(port, ()=>{
    console.log(`application started successfully on port : ${port}`);
});