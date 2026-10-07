const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendAlert(site) {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ALERT_EMAIL,
        subject: `${site.name} is DOWN`,
        text: `${site.url} failed a check at ${new Date().toLocaleString()}`
    });
}

module.exports = sendAlert;