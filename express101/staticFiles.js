const express = require("express");
const app = express();

// app comes with the use method
// use method takes 1 arg
// 1. The Middleware that you want to run

app.use(express.static("public"));

app.listen(3000);
console.log("The server is listening to port 3000");