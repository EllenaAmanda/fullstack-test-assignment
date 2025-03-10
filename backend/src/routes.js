const express = require("express");
const { getTrips, detailTrip } = require("./controller/trip");

const router = express.Router();

router.get("/trips", getTrips);
// lanjutkan untuk detail, add, dan delete
router.get("/trips/:id", detailTrip);

module.exports = router;
