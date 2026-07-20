const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        url: {
            type: String,
            required: true,
            unique: true,
        },

        status: {
            type: String,
            enum: ["up", "down", "unknown"],
            default: "unknown",
        },

        lastChecked: {
            type: Date,
            default: null,
        },

        lastResponseTimeMs: {
            type: Number,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Site", siteSchema);
