const express = require("express");
const UserRoute = require("./user.route");
const appointmentroute = require("./appointments.routes");
const caseroute = require("./case.route");
const clientroute = require("./client.route");
const contactroute = require("./contact.route");
const courtroute = require("./court.route");
const documentroute = require("./document.route");
const opposantroute = require("./opposant.route");
const procedureroute = require("./procedure.route");
const sessionroute = require("./session.route");
const router = express.Router();

const docsRoute = require("./doc.routes");
const config = require("../config/config.json");

const defaultRoutes = [
  {
    path: "/api/user",
    route: UserRoute,
  },
  {
    path: "/api/appointment",
    route: appointmentroute,
  },
  {
    path: "/api/case",
    route: caseroute,
  },
  {
    path: "/api/client",
    route: clientroute,
  },
  {
    path: "/api/contact",
    route: contactroute,
  },
  {
    path: "/api/court",
    route: courtroute,
  },
  {
    path: "/api/document",
    route: documentroute,
  },
  {
    path: "/api/opposant",
    route: opposantroute,
  },
  {
    path: "/api/procedure",
    route: procedureroute,
  },
  {
    path: "/api/session",
    route: sessionroute,
  },
  // {
  //   path: "/api/job",
  //   route: sceduleroute,
  // },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/api/swagger",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
if (config.env_development === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(`<h1 style="text-align:center">WELCOME TO LEGAL PORTAL Mode</h1>`);
});

module.exports = router;
