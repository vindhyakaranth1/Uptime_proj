require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const sitesRouter = require("./routes/sites");

const app = express();

app.use(express.json());

app.use("/api/sites", sitesRouter);

app.get("/", (req, res) => {
    res.json({
        message: "Uptime Monitor API is running",
    });
});

// Catch-all 404
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});

// Central Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        error: "Something went wrong",
    });
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });