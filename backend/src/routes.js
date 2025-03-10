const express = require("express");
const { getTrips, detailTrip, addTrip, deleteTrip } = require("./controller/trip");

const router = express.Router();

router.get("/trips", getTrips);
// lanjutkan untuk detail, add, dan delete
router.get("/trips/:id", detailTrip);
router.delete("/trips/:id", deleteTrip);
router.post("/trips", addTrip);

module.exports = router;
