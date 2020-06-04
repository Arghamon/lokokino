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

module.exports = mongoose.connect('mongodb://movie:N$E8Ax.U8U48c5R@ds141284.mlab.com:41284/moviequizz', options);

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
}).on('error', (error) => {
    console.log('connection error: ' + error)
})