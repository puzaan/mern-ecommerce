import mongoose from 'mongoose'


const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true,
        });
        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.bold)
        
    } catch (error) {
        console.error(`Error: ${err.message}`.red.bgBlue);
        process.exit(1);
        
    }
}

export default connectDB

// process.exit(1 === true); = exit whole app 