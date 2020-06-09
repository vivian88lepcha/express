const express = require("express");
const app = express();
const helmet = require('helmet'); // Gives some additional security.

app.use(helmet());

// 1. static
// 2. json
// 3. urlencoded

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
    console.log(req.body.firstname);
    res.json("TEST");
});

app.listen(3000);