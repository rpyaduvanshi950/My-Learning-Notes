const express =  require('express');
const app =  express();
const path =  require('path');
const fs =  require('fs');
const bodyparser = require('body-parser');
// // getting-started.js
const mongoose = require('mongoose');

// main().catch(err => console.log(err));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// MongoDB connection
const url = 'mongodb+srv://rpyaduvanshi950:Pushpender%40123@cluster1connectify.coxda3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1connectify'; // Replace with your actual database name

mongoose.connect(url)
// async function main() {
//   await mongoose.connect('mongodb://rpyaduvanshi950:Pushpender%40123@127.0.0.1:27017/connectify');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// defining mongoose schema
const contactschema = new mongoose.Schema({
    name: String,
  phone: String,
  address: String,
  email: String,
  desc: String
  });
  const contact = mongoose.model('contact', contactschema);

const port =80;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('contact.pug', params);
})

app.post("/contact",(req,res)=>{
    var mydata = new contact(req.body);
    mydata.save().then(()=>{
        console.log("item added");
    }).catch(()=>{
        res.status(400).send("Item not added")
    })
    // res.status(200).render('contact.pug');
})





// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});