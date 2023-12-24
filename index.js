const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/products");

// connecting to database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION_URL).then(() => console.log("DBConnection is Successful")).catch((err) => { console.log(err); });

// connecting to server
app.listen(process.env.PORT, () => {
    console.log("Backend Server is running on port 5005");
});

// middlewares
app.use(bodyParser.json());
app.use("/products", productRouter);
