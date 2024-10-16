import mongoose from "mongoose";

const ConnectDB = async ()=> {
    try{
        const connection = await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`Connected to DB! ${connection}`);
    }
    catch(err){
        console.log(`DB Connection Error: ${err}`);
        process.exit(1);
    }
}

export default ConnectDB;