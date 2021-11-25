const { appointments } = require("../models/appointments");

const index = async (req, res, _next) => {
  try {
    const appointment = await appointments.findAll(
      { where: { id: req.body.id } },
      {
        tableName: "appointments",
      }
    );
    return res.status(200).json(appointment);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const appointment = await appointments.findByPk(req.body.id);
    if (!appointment) {
      return res.status(404).json({
        message: "Appointment Not Found",
      });
    }
    return res.status(200).json(appointment);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const {
      subject: sub,
      startdate: sd,
      enddate: ed,
      starttime: st,
      endtime: et,
    } = req.body;

    const appointment = await appointments.create({
      sub,
      sd,
      ed,
      st,
      et,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const {
      id,
      subject: sub,
      startdate: sd,
      enddate: ed,
      starttime: st,
      endtime: et,
    } = req.body;

    const appointment = await appointments.findByPk(id);
    if (!appointment) {
      return res.status(404).json({
        message: "Appointment Not Found",
      });
    }
    await appointment.update({
      subject: sub || appointment.sub,
      startdate: sd || appointment.sd,
      enddate: ed || appointment.ed,
      starttime: st || appointment.st,
      endtime: et || appointment.et,
    });
    return res.status(200).json(appointment);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const dlt = async (req, res, _next) => {
  try {
    const appointment = await appointments.findByPk(req.body.id);
    if (!appointment) {
      return res.status(404).json({
        message: "Appintment not found",
      });
    }
    await res.dlt();
    return res.status(200).json({
      message: "Appointment deletedd successfully",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
module.exports = {
  dlt,
  update,
  store,
  show,
  index,
};
