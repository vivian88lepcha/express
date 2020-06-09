// Express is the node Framework
const path = require("path");
const express = require("express");
// 'express' module returns the createServer object without invoking it.
const app = express();

// Serving up the static files
app.use(express.static("public"));

// 'all' is the method which takes 2 args.
// 1. route
// 2. callback to run if the route is requested
app.all("/", (req, res) => {
    // Express handles the basic headers (status code, MIME Type) ! Awesome
    //res.send("<h1> This is Express </h1>");
    console.log(path.join(__dirname + "/node.html"));
    res.sendFile(path.join(__dirname + "/node.html"));
    // Express handles the 'end'! Awesome.
});
app.all("*", (req, res) => {
    res.send("<h1> ERROR! This is the Error Page</h1>");
});

app.listen(3000);
console.log("The server is listening to port 3000");