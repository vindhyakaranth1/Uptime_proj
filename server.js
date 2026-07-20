require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const sitesRouter = require("./routes/sites");

const app = express();
app.use(express.json());
app.use("/api/sites", sitesRouter);

app.get("/", (req, res) => {
    res.json({
        message: "Uptime Monitor API is running"
    });
});


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