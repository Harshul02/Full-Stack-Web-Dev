const express = require('express');
const app = express();

app.get("/", function(request, response)
{
    // console.log(request);
    response.send("<h1>Hello World!</h1>");
});
app.get("/contact", function(request, response)
{
    // console.log(request);
    response.send("contact me at: Hj#1234");
});
app.get("/about", function(request, response)
{
    // console.log(request);
    response.send("I am Harshul Jain. I am a Full Stack Web Developer and a Java Backend Developer");
})
app.get("/hobbies", function(req, res)
{
    // console.log(request);
    res.send("<ul><li>Code</li><li>Coffee</li><li>Party</li></ul>");
})

app.listen(3000, function(){
    console.log("Port activated");
});