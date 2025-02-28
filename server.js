const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb://atlas-sql-67bef2171e685c7721bca43c-lk0n8.a.query.mongodb.net/Reja?ssl=true&authSource=admin"


mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    }, (err, client) => {
        if (err) console.log("Error connecting to MongoDB");
        else {
            console.log("MongoDB Connection successful");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running succesfully on port ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    } 
);




/*

const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString = "mongodb://atlas-sql-67bef2171e685c7721bca43c-lk0n8.a.query.mongodb.net/Reja?ssl=true&authSource=admin";

const client = new MongoClient(connectionString);

client.connect()
  .then(() => {
    console.log("MongoDB Connection successful");
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
      console.log(
        `The server is running succesfully on port ${PORT}, http://localhost:${PORT}`
      );
    });
  })
  .catch(err => {
    console.log("Error connecting to MongoDB:", err);
  });

  */
