import mongoose from "mongoose";
import app from "./app";


async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/practice-mongoose");
        console.log("Database connected successfully");
    }
    catch (err) {
        console.log(err)
    }
}

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is connected on PORT ${PORT}`))