const express = require("express");
const router = express.Router();
const { getAllData, addData } = require("../controllers/datacontroller");

router.get("/", getAllData);
router.post("/", addData);

module.exports = router;
