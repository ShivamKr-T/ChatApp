import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()

dotenv.config();
const PORT =process.env.PORT || 3001;
const URI=process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("MongoDB connected");
} catch (error) {
    console.log(error);
}

app.get('/', (req, res) => {
  res.send('Hello Shivam!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
