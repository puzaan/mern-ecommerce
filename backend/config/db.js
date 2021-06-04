import mongoose from 'mongoose'
import colors from 'colors';

// for connecting our project to database


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true,
        });
        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.bold)
        
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);
        
    }
}

export default connectDB

// process.exit(1 === true); = exit whole app 