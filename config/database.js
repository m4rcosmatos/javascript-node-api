const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);


mongoose.connect('mongodb://localhost/javascriptNote', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('connetion succesful'))
  .catch((err)=>console.log(err));