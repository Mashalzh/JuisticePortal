/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import UserRoute from "./user.route.js";
import appointmentroute from "./appointments.routes.js";
import caseroute from "./case.route.js";
import clientroute from "./client.route.js";
import contactroute from "./contact.route.js";
import courtroute from "./court.route.js";
import documentroute from "./document.route.js";
import opposantroute from "./opposant.route.js";
import procedureroute from "./procedure.route.js";
import sceduleroute from "../jobscheduler/cornjob.js";
import sessionroute from "./session.route.js";
const router = require("express").Router();

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
  {
    path: "/api/job",
    route: sceduleroute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(`<h1 style="text-align:center">WELCOME TO LEGAL PORTAL Mode</h1>`);
});

module.exports = router;
