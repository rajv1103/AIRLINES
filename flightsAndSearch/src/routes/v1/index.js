const express = require("express");
const router = express.Router();
const { flightMiddlewares } = require('../../middlewares/index');
const cityController = require("../../controllers/cityControllers");
const flightControllers = require("../../controllers/flightControllers");

router.post("/city", cityController.create);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.delete("/city/:id", cityController.destroy);
router.patch("/city/:id", cityController.update);
router.post("/flights",flightMiddlewares.validateCreateFlight, flightControllers.create);
router.get("/flights",flightControllers.getAll)
module.exports = router;
