// Initialize Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Initialize DB and Routes here
const mongoose = require("mongoose");
// const routes = require("./routes");

// Define Middlewares Here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static asset (when deployed to heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes
// app.use(routes);

// Connect to MongoDB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/hjadb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the Server
app.listen(PORT, function () {
    console.log("Server runing on https://localhost:" + PORT);
});