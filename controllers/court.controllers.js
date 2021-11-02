import court from "../models/court.js";

const index = async (req, res, _next) => {
  try {
    const courts = await court.findAll({
      tablename: "user",
    });
    return res.status(200).json(courts);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const cort = await court.findByPk(req.params.id);
    if (!cort) {
      return res.status(404).json({
        message: "court Not Found",
      });
    }
    return res.status(200).json(cort);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, _next) => {
  try {
    const { name, type, roomnum, judgename } = req.body;

    const cort = await court.create({
      name,
      type,
      roomnum,
      judgename,
    });

    return res.status(200).json(cort);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const { id, name, type, roomnum, judgename } = req.body;

    const cort = await court.findByPk(id);
    if (!cort) {
      return res.status(404).json({
        message: "Court Not Found",
      });
    }
    await court.update({
      name: name || cort.name,
      type: type || cort.type,
      roomnum: roomnum || cort.roomnum,
      judgename: judgename || cort.judgename,
    });

    return res.status(200).json(cort);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const cort = await court.findByPk(req.body.id);
    if (!cort) {
      return res.status(404).json({
        message: " Court not found",
      });
    }
    await cort.dlt();
    return res.status(200).json({
      message: "Court deleted successfully",
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
