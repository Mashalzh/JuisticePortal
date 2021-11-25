const case1 = require("../models/case");

const index = async (req, res, _next) => {
  try {
    const cases = await case1.findAll({
      tablename: "user",
    });
    return res.status(200).json(cases);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const cases = await case1.findByPk(req.params.id);
    if (!cases) {
      return res.status(404).json({
        message: "Case Not Found",
      });
    }
    return res.status(200).json(cases);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, _next) => {
  try {
    const {
      status: st,
      charges: ch,
      startdate: sd,
      topic,
      facts,
      rule,
      type,
      sessions: ss,
    } = req.body;

    const cases = await case1.create({
      st,
      ch,
      sd,
      topic,
      rule,
      facts,
      type,
      ss,
    });

    return res.status(200).json(cases);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const {
      id,
      status: st,
      charges: ch,
      startdate: sd,
      topic,
      facts,
      rule,
      type,
      sessions: ss,
    } = req.body;

    const cases = await case1.findByPk(id);
    if (!cases) {
      return res.status(404).json({
        message: "Case Not Found",
      });
    }
    await cases.update({
      status: st || cases.status,
      charges: ch || cases.charges,
      startdate: sd || cases.startdate,
      topic: topic || cases.topic,
      facts: facts || cases.facts,
      rule: rule || cases.rule,
      type: type || cases.type,
      sessions: ss || cases.ss,
    });

    return res.status(200).json(cases);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const cases = await case1.findByPk(req.body.id);
    if (!cases) {
      return res.status(404).json({
        message: " Case not found",
      });
    }
    await cases.dlt();
    return res.status(200).json({
      message: "Case deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
module.exports = {
  index,
  show,
  dlt,
  update,
  store,
};
