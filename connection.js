const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, 
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, 
    useFindAndModify: false,
    useUnifiedTopology: true
  }

module.exports = mongoose.connect('mongodb+srv://Lokokino:artpass123@cluster0.3y4rg.mongodb.net/lokokino?retryWrites=true&w=majority', options);

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
}).on('error', (error) => {
    console.log('connection error: ' + error)
})

