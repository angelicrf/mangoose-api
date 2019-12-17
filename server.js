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

const connectDB = async () => {
    mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
        .then(() => console.log('MongoDb is Connected..'))
        .catch(err => console.log(err));
};
connectDB();
app.get('/', function (req, res){
    res.send('Root route')
});
app.use('/api/items', items);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.SERVER_PORT || 30026;

app.listen(port, () => console.log(`Server is running on port: ${port}`));