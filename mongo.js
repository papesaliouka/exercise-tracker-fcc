
const mongoose = require('mongoose');

const mySecret = process.env['MONGO_URI'];


mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection ready')
});

mongoose.connection.on('error', (err)=> {
    console.error(err)
})


async function mongoConnection(){
    await mongoose.connect(mySecret);
} 

module.exports = mongoConnection;