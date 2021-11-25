const procedure = require("../models/procedure");

const index = async (req, res, next) => {
  try {
    const procedures = await procedure.findAll({
      tablename: "procedure",
    });
    return res.status(200).json(procedures);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const show = async (req, res, _next) => {
  try {
    const procedures = await procedure.findByPk(req.params.id);

    if (!procedures) {
      return res.status(404).json({
        message: "Procedure Not Found",
      });
    }
    return res.status(200).json(procedures);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, _next) => {
  try {
    const { desc, date } = await req.body;
    const procedures = await procedure.create({
      desc,
      date,
    });

    return res.status(400).json(procedures);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { desc, date } = await req.body;
    const procedures = await procedure.findByPk(req.body.id);

    if (!procedures) {
      return res.status(404).json({
        message: "Procedure Not Found",
      });
    }

    await procedures.update({
      desc: desc || procedures.desc,
      date: date || procedures.date,
    });

    return res.status(200).json(procedures);
  } catch (err) {
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const procedures = await procedure.findByPk(req.body.id);
    if (!procedures) {
      return res.status(404).json({
        message: "Procedure not found",
      });
    }
    await procedures.dlt();
    return res.status(400).json({
      message: "Procedure Dleted Sucessfully",
    });
  } catch (err) {
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
