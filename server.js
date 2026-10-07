require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const sitesRouter = require("./routes/sites");
const startMonitorJob = require("./jobs/monitorJob");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sites", sitesRouter);

app.get("/", (req, res) => {
    res.json({
        message: "Uptime Monitor API is running"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        error: "Internal Server Error"
    });
});

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        startMonitorJob();
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err.message);
    });