const mongoose = require("mongoose");

const checkSchema = new mongoose.Schema({
    site: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Site",
        required: true
    },

    status: {
        type: String,
        enum: ["up", "down"],
        required: true
    },

    responseTime: {
        type: Number,
        required: true
    },

    checkedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Check", checkSchema);