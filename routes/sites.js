const express = require("express");
const Site = require("../models/Site");
const Check = require("../models/Check");

const router = express.Router();


// POST /api/sites
router.post("/", async (req, res, next) => {
    try {
        const { name, url } = req.body;

        const site = await Site.create({
            name,
            url
        });

        res.status(201).json(site);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({
                error: "A site with this URL already exists"
            });
        }

        next(err);
    }
});


// GET /api/sites
router.get("/", async (req, res, next) => {
    try {
        const sites = await Site.find().sort({
            createdAt: -1
        });

        res.status(200).json(sites);
    } catch (err) {
        next(err);
    }
});


// DELETE /api/sites/:id
router.delete("/:id", async (req, res, next) => {
    try {
        const site = await Site.findByIdAndDelete(req.params.id);

        if (!site) {
            return res.status(404).json({
                error: "Site not found"
            });
        }

        res.status(200).json({
            message: "Site deleted successfully"
        });
    } catch (err) {
        next(err);
    }
});


// GET /api/sites/:id/checks
router.get("/:id/checks", async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 50;

        const checks = await Check.find({
            site: req.params.id
        })
            .sort({ checkedAt: -1 })
            .limit(limit);

        res.status(200).json(checks.reverse());
    } catch (err) {
        next(err);
    }
});


module.exports = router;

<html>
    <head>
        <title>
            First web page for tutedude website
        </title>
    </head>
    <b>
        <p>
            So this is the parragprah tht tells abt thte college ,.n so far movie is being goodd like really goodd
        </p>
        
    </b>
</html>