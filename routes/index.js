/* eslint-disable no-undef */
import UserRoute from "./user.route.js";
import appointmentroute from "./appointments.routes";
import caseroute from "./case.route";
import clientroute from "./client.route";
import contactroute from "./contact.route";
import courtroute from "./court.route";
import documentroute from "./document.route";
import opposantroute from "./opposant.route";
import procedureroute from "./procedure.route";
import sessionroute from "./session.route";

const router = express.Router();

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
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(`<h1 style="text-align:center">WELCOME TO LEGAL PORTAL Mode</h1>`);
});

export default router;
