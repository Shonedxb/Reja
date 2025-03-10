const http = require('http');
const mongodb = require('mongodb');
let db;
const connectionString = "mongodb+srv://dxb:hjEu6kPAc22h3qRg@cluster0.lk0n8.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    }, (err, client) => {
        if (err) console.log("Error connecting to MongoDB");
        else {
            console.log("MongoDB Connection successful!");
            module.exports = client;

            const app = require('./app');
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