const express = require("express");
const app = express();

// app objects have few methods
// Its is called HTTP verbs! REST verbs!
// CRUD app correspondence.
// 1. get - READ (Default for all the browsers)
// 2. post - CREATE
// 3. delete - DELETE
// 4. put - UPDATE
// 5. all - I will accept any method

// All HTTP methods take 2 args
// 1. path
// 2. callback to run
// if the HTTP request matches THIS verb

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the GET PAGE </h1>`);
});
app.post("/", (req, res) => {
    res.send(`<h1>Welcome to the POST PAGE </h1>`);
});
app.delete("/", (req, res) => {});
app.put("/", (req, res) => {});

app.listen(3000);
console.log("The server is listening to port 3000");