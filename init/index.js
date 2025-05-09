const mongoose = require("mongoose");                   // Import mongoose
const initData = require("./data.js");                  // Import sample data
const Listing = require("../model/listing.js");         // Import Listing model

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  // MongoDB local connection URL

main()
  .then(() => {
    console.log("connected to DB");                     // Log if connected
  })
  .catch((err) => {
    console.log(err);                                   // Log if error
  });

async function main() {
  await mongoose.connect(MONGO_URL);                    // Connect to DB
}

const initDB = async () => {
  await Listing.deleteMany({});                         // Delete all previous data
  await Listing.insertMany(initData.data);              // Insert new sample data
  console.log("data was initialized");                  // Confirmation log
};

initDB();                                               // Call the initialization