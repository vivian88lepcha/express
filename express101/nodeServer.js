const http = require("http");
// fs is file system, which have the access to the Files of the current THIS system.
const fs = require("fs");
// The http module has a createServer method which takes 1 arg which is a callback
// The callback take 2 args : req , res

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        //console.log(req);
        // res = our way to respond to the requester
        // http message
        // 1. start-line - CHECK
        // 2. header
        // 3. body
        // writeHead takes 2 args
        // 1. status code
        // 2. object for the mime-type or the content type
        res.writeHead(200, { "content-type": "text/html" });
        // res.write("<h1> Hello, World </h1>");
        // res.end();
        const homePageContent = fs.readFileSync("node.html");
        res.write(homePageContent);
        res.end();
    } else if (req.url === "/node.png") {
        res.writeHead(200, { "content-type": "image/png" });
        const homeImage = fs.readFileSync("node.png")
        res.write(homeImage);
        res.end();
    } else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        const styles = fs.readFileSync("styles.css");
        res.write(styles);
        res.end();
    } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1> ERROR! Page not Found </h1>");
        res.end();
    }
});
// createServer returns and object with a listen method.
// listen takes 1 arg which is: port to listen for http traffic on.

server.listen(3000);