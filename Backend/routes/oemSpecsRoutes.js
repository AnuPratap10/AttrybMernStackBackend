const express = require("express");
const router = express.Router();
const oemSpecsController = require("../controllers/oemSpecsController");

router.get("/", oemSpecsController.getAllOEMSpecs);
router.post("/", oemSpecsController.addOEMSpecs);
router.get("/count", oemSpecsController.queryOEMModelsCount);
router.get('/search', oemSpecsController.searchOEMSpecs);

module.exports = router;
