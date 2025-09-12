const express = require('express');   // This imports the Express framework into your Node.js project.
// Express is a web framework that helps you build APIs and web servers quickly.

const app = express();    // creating an Express application instance.

app.listen(3000, () => {
    console.log("Server Started At Port 3000");
});

/*
app.listen(...) tells Express/Node to create an HTTP server (if one doesn’t exist yet) and begin accepting incoming network connections on the specified port.
The callback you pass (() => { ... }) runs once the server is successfully listening.
*/


// req-> request  ( can be used with another name , it is just a name)
// res -> respond
app.get('/', (req, res) => {    // This will create a route so whenever we reach to that page, they will send the response 
    res.send("Hello , jee kaise ho sare");
});
// .get() defines a route handler for the HTTP GET method.

/*
app.get(path, callback)
path → URL pattern ('/', '/about', '/users/:id', etc.)

callback → Function that runs when a request matches this route.

*/

const bodyParser = require('body-parser');
// You’re importing the body-parser package.

// body-parser is a middleware that helps Express parse incoming request bodies (the data clients send in POST, PUT, etc.).

app.use(bodyParser.json());   // In this , we are specifically saying that we have to parse the data

/*
This tells Express to use the body-parser middleware for all incoming requests.

bodyParser.json() specifically:

Looks for requests with Content-Type: application/json

Parses the JSON string in the body

Converts it into a JavaScript object

Puts that object inside req.body
*/

app.post('/api/cars', (request, response) => {

    const { name, brand } = request.body;

    console.log(name)
    console.log(brand);

    response.send("Data Subumitted Subbsessfully");

});


// const { name, brand } = request.body;

// This uses object destructuring to extract name and brand from request.body.

// request.body contains the data sent by the client in the request body.

//  Important: request.body only works if you use middleware like:

// app.use(express.json());        // to parse JSON requests
// app.use(express.urlencoded({ extended: true })); // to parse form data

// learn 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myDatabase" , {
    useNewurlParser:true, 
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection Successful");
})
.catch((error)=>{
    console.log("Error");
});