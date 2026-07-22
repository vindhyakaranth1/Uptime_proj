const express = require("express");
const router = express.Router();

const Site = require("../models/Site");

// Create a new site

router.post("/", async (req, res, next) => {

    const name = req.body.name?.trim();
    const url = req.body.url?.trim();

    if (!name || !url) {
        return res.status(400).json({
            error: "name and url are required",
        });
    }

    try {

        const site = await Site.create({
            name,
            url,
        });

        res.status(201).json(site);

    } catch (err) {

        if (err.code === 11000) {
            return res.status(409).json({
                error: "This URL is already being monitored",
            });
        }

        next(err);
    }

});

// Get all sites
router.get("/", async (req, res, next) => {

    try {
        const sites = await Site.find().sort({
            createdAt: -1,
        });
        res.json(sites);

    } catch (err) {
        next(err);
     }
});

// Delete a site
router.delete("/:id", async (req, res, next) => {

    try {
        const deleted = await Site.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                error: "Site not found",
            });
        }

        res.json({
            message: "Site removed",
            site: deleted,
        });

    } catch (err) {
        next(err);
    }

});

module.exports = router;