require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Uptime Monitor API is running"
    });
});
const connectDB = require("./config/db");

console.log(connectDB);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });