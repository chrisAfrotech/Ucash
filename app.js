// This file is always use for express application
const express = require('express');
const app = express();
const morgan = require("morgan");

//Definition of the view engine
app.set('view engine', 'ejs');
app.set('views', 'Components');

//Ressources statics
app.use(express.static('Components')); //Middleware function that permit to serve static or dynamic ressources to the nodejs server (image,video...)
// app.use(express.static('Components/Dashboard'));

app.use(morgan("dev")); //change the format display of the time request in the console

app.use(morgan("tiny")); //give the time execution of the request

app.use((req,res,next)=>{
    console.log("Request done on : "+Date().toString());
    next(); //This function give th possibility to our middleware function to pass to another function when the execution end 
});

app.get('/index', (req, res) => {
    res.status(200).render("index"); //status for request done sucessfully
});
// app.get('/sidebar', (req, res) => {
//     res.status(200).render("sidebar"); //status for request done sucessfully
// });

app.get('/', (req, res) => { 
    res.status(300).redirect("/index"); //status for redirect client to index.tml when url in racine
});

app.use((req, res) => {
    res.status(404).render("erreur");   //status for request not found
});

app.listen(3001,()=>{
    console.log("Waiting request port 3001");
});
console.log("Error while creating server");