import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded



// Connect to MongoDB using URL-encoded password
mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to the MongoDB");
})
.catch((error) => {
  console.console.log("Error connecting to MongoDB:", error);
  
});

const app = express();

// Your app routes and middleware would go here
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

