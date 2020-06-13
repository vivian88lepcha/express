const path = require('path');

const express = require('express');
const app = express();
const helmet = require('helmet');


app.use(helmet());
// Serves the static files
app.use(express.static('public'));
// Parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());


// app.set(), takes 2 args,
// 1. Key
// 2. Value
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'templates'));

// Rendering Engine
// 1. Define the view Engine 
//  -EJS
//  -Mustache
//  -Handlebars
//  -Jade/Pug
// 2. Use res.render() in one of the routes
// 3. We pass res.render() two things. 
//  - the file that we want to use
//  - the data we want to send to that file.Use
// 4. Express uses the node modules for the  specified view engine and parse the file. 


app.get('/', (req, res, next) =>{
    res.render('index');
});

app.listen(3000);