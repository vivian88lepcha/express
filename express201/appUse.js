const express = require("express");
const app = express();

// Express those two things
// 1. Routing
// 2. Middleware that comprises a web framework

// Req ------ MIDDLEWARE ------ Res
// Middleware function is any function that has the access to the req, res and next object.
//1. Request Comes in.
//2. We need to validate the user sometimes.
//3. We need to store things in the DB.
//4. If there are data from the user we need to parse it and store it.
//5. Res

function validateUser(req, res, next) {
    //get info out of the req object
    //do some with the DB
    res.locals.validated = true;
    console.log("Validated Ran!");
    next();
}
// This run validated user Middleware on all Routes
app.use(validateUser);
// This run validated user Middleware only on Admin Routes
app.use("/admin", validateUser);
// This run validated user Middleware only on get method and only for Homepage Routes
app.get("/", validateUser);

app.get("/", (req, res, next) => {
    res.send("<h1>HOME PAGE</h1>");
});

app.get("/admin", (req, res, next) => {
    res.send("<h1>ADMIN PAGE</h1>");
    console.log(res.locals.validated);
});

app.listen(3000);