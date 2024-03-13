import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting to the database", error.message);
    }
};

export default Connection;
