const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB 
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Middleware
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I am Sagar");
});

// Start Server
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});