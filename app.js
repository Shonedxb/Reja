console.log("web serverni boshlash");
const express = require("express");
const app = express();

// MongoDB chaqirish:
const db = require("./server").db();
const mongodb = require("mongodb");
const client = require("./server");


//1: Kirish  code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//2 Session Code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing code
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.end("successfully created");
      }
   });
});


app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});
  
module.exports = app;



