import session from "../models/session.js";

const index = async (req, res, next) => {
  try {
    const sessions = await session.findAll({
      tablename: "session",
    });
    return res.status(200).json(sessions);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const show = async (req, res, _next) => {
  try {
    const sessions = await session.findByPk(req.body.id);
    if (!sessions) {
      return res.status(404).json({
        message: "Session Not Found",
      });
    }
    return res.status(200).json(sessions);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const { date, decision, outcomes, court } = req.body;

    const sessions = await session.create({
      date,
      decision,
      outcomes,
      court,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const { id, date, decision, outcomes, court } = req.body;

    const sessions = await session.findByPk(id);
    if (!sessions) {
      return res.status(404).json({
        message: "Session Not Found",
      });
    }
    await session.update({
      date: date || sessions.date,
      decision: decision || sessions.decision,
      outcomes: outcomes || sessions.outcomes,
      court: court || sessions.court,
    });
    return res.status(200).json(sessions);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const dlt = async (req, res, _next) => {
  try {
    const sessions = await session.findByPk(req.body.id);
    if (!sessions) {
      return res.status(404).json({
        message: "Session not found",
      });
    }
    await sessions.dlt();
    return res.status(200).json({
      message: "Session deletedd successfully",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};
module.exports = {
  index,
  show,
  update,
  store,
  dlt,
};
