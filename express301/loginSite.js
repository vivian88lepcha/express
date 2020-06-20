const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
const cookieParser = require('cookie-parser');

app.use(helmet());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template'));

app.use((req, res, next)=> {
    if(req.query.msg == 'fail') {
        res.locals.msg = "Sorry the Username and Password is Incorrect";
    }else {
        res.locals.msg = '';
    }

    next();
});

app.get('/login',(req , res , next)=> {
    // The req object has the query property in Express
    // req.query can fetch all the keys in the query string
    //console.log(req.query);
    res.render('login');

});

// Form Submission Route
app.post('/process_login', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    // Write the User valdiation logic here.
    // Checking the DB and OATH authentication will go here
    // IF they are valid 
    //  - Save the Username to Cookie
    //  - Redirect the user to the Welcome Page
    if(password === "*") {
        //res.cookie  takes 2 arg:
        // 1. Name of the Cookie
        // 2. Value to be set to.
        res.cookie("username", username);
        // res.redirect() takes 1 arg:
        // - It Destination route address
        res.redirect('/welcome');
    } else {
        // The "?" is s special character in the url which indicates the start of the query string
        // The "&" is a special character that is used to pass multiple query string.   
        // The Query String is the place where we put the insecure data.
        res.redirect('/login?msg=fail&test=hello');
    }
});

// Welcome Page Route, if the cookie is saved
app.get('/welcome', (req, res, next) =>{
    if(!req.cookies.username) {
        res.redirect('/login');
    } else {
        res.render('welcome', {
            //req.cookies take 1 arg:
            // 1. Name of the cookie that was set
            username : req.cookies.username
        });
    }
});

// Logout Route
app.get('/logout',(req, res, next)=>{
    //clearCookie() takes 1 arg 
    // - Cookie name to be cleared.
    res.clearCookie('username');
    res.redirect('/login');
});

app.listen(3000);
console.log("The server is listening to port 3000");