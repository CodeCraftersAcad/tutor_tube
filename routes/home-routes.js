const router = require('express').Router(),
  { getHome } = require("../controllers/home-controllers");

router
  .route("/:search")
  .get(getHome);

module.exports = router;