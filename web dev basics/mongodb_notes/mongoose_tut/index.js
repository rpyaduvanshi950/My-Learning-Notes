// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harry');

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once("open",function(){
    // we are connected
    console.log('we are connected');
})

const kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
}

const Kitten = mongoose.model('harrykitty', kittySchema);

var harrykitty= new Kitten({ name: 'harryKitty2' });
// console.log(harrykitty.name);

// harrykitten.speak()

harrykitty.save()
    .then(() => console.log('Document saved'))
    .catch(err => console.error(err));

// Kitten.find(function(err,Kittens){
//     if (err) return console.error(err);
//     console.log(Kittens)
// })
Kitten.find({})
  .then(docs => console.log('Documents found:', docs))
  .catch(err => console.error(err));