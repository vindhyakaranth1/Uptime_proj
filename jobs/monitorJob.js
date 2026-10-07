const cron = require("node-cron");
const Site = require("../models/Site");
const Check = require("../models/Check");
const checkSite = require("../services/checkSite");
const sendAlert = require("../services/sendAlert");

async function runChecks() {
    try {
        const sites = await Site.find();

        for (const site of sites) {
            const previousStatus = site.status;

            const result = await checkSite(site.url);

            if (previousStatus !== "down" && result.status === "down") {
                await sendAlert(site);

                console.log(`📧 Alert sent for ${site.name}`);
            }

            await Site.findByIdAndUpdate(site._id, {
                status: result.status,
                lastChecked: new Date(),
                lastResponseTimeMs: result.responseTime
            });

            await Check.create({
                site: site._id,
                status: result.status,
                responseTime: result.responseTime
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

    console.log("✅ Monitor job started — checking every 5 minutes");
}

module.exports = startMonitorJob;