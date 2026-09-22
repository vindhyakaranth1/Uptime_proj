const axios = require("axios");

async function checkSite(url) {
    const start = Date.now();

    try {
        const response = await axios.get(url, {
            timeout: 5000
        });

        const responseTime = Date.now() - start;

        return {
            status: "up",
            responseTime,
            statusCode: response.status
        };
    } catch (err) {
        const responseTime = Date.now() - start;

        return {
            status: "down",
            responseTime,
            error: err.message
        };
    }
}

module.exports = checkSite;