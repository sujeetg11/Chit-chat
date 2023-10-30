const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

};
module.exports = connectDB;

