const cron = require("node-cron");
const Site = require("../models/Site");
const checkSite = require("../services/checkSite");

async function runChecks() {
    try {
        const sites = await Site.find();

        for (const site of sites) {
            const result = await checkSite(site.url);

            await Site.findByIdAndUpdate(site._id, {
                status: result.status,
                lastChecked: new Date(),
                lastResponseTimeMs: result.responseTime
            });

            console.log(
                `Checked ${site.url}: ${result.status} (${result.responseTime}ms)`
            );
        }
    } catch (err) {
        console.error("Monitoring job error:", err.message);
    }
}

function startMonitorJob() {
    cron.schedule("*/1 * * * *", runChecks);

    console.log("✅ Monitor job started — checking every 1 minute");
}

module.exports = startMonitorJob;