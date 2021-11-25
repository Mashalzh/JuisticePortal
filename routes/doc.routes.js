const { Router } = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const { serve, setup } = require("swagger-ui-express");
const swaggerDefinition = require("../docs/swagger");

const router = Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ["routes/*.js"],
});

router.use("/", serve);
router.get(
  "/",
  setup(specs, {
    explorer: true,
  })
);
module.exports = router;
