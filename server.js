console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1: Kirish  code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Session Code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.get("/hello", function (req, res) {
    res.end(`<h1>Hello world!</h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1>Siz sovgalar bolimidasz</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
    });
