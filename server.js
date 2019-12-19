const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
const items = require('./routes/api/items.js');

const app = express();

app.use(bodyParser.json());
const db = require('./config/keys.js').mongoURI;
console.log("db is:",db);
mongoose.Promise = global.Promise;
app.use(express.static('client/build'));
const connectDB = async () => {
    mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
        .then(() => console.log('MongoDb is Connected..'))
        .catch(err => console.log(err));
};
connectDB();
app.get('/', function (req, res){
    res.sendFile(path.resolve('client', 'build', 'index.html'));
    //res.sendFile(path.join(__dirname +'/client/build/index.html'));
});
app.use('/api/items', items);
console.log("the process env NODE_ENV", process.env.port);

//if(process.env.NODE_ENV === 'production'){

app.get('*', (req,res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    //res.sendFile(path.join(__dirname +'/client/build/index.html'));
    });
//}

const port = process.env.SERVER_PORT || 30026;
//console.log("the process env port", process.env.PORT);
//console.log("the process env SERVER_PORT", process.env.SERVER_PORT);
app.listen(port, () => console.log(`Server is running on port: ${port}`));