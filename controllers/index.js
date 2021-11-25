const usercontrollers = require("./user.controllers");
const appointmentscontroller = require("./appointments.controller");
const casecontrollers = require("./case.controllers");
const clientcontrollers = require("./client.controllers");
const contactcontrollers = require("./contact.controllers");
const Lacourtcontrollersws = require("./court.controllers");
const documentcontrollers = require("./document.controllers");
const opposantcontrollers = require("./opposant.controllers");
const procedurecontrollers = require("./procedure.controllers");
const sessioncontrollers = require("./session.controllers");
module.exports = {
  appointmentscontroller,
  casecontrollers,
  clientcontrollers,
  contactcontrollers,
  Lacourtcontrollersws,
  documentcontrollers,
  opposantcontrollers,
  procedurecontrollers,
  sessioncontrollers,
  usercontrollers,
};
