import contact from "../models";

const index = async (req, res, _next) => {
  try {
    const contacts = await contact.findAll({
      tablename: "contact",
    });
    return res.status(200).json(contacts);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const show = async (req, res, _next) => {
  try {
    const contac = await contact.findByPk(req.params.id);
    if (!contac) {
      return res.status(404).json({
        message: "Contact Not Found",
      });
    }
    return res.status(200).json(contac);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const store = async (req, res, _next) => {
  try {
    const { fname: fn, lname: ln, fixnum, partnb, type, fax } = req.body;

    const contac = await contact.create({
      fn,
      ln,
      fixnum,
      partnb,
      type,
      fax,
    });

    return res.status(200).json(contac);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const { id, fname: fn, lname: ln, fixnum, partnb, type, fax } = req.body;

    const contac = await contact.findByPk(id);
    if (!contac) {
      return res.status(404).json({
        message: "contact Not Found",
      });
    }
    await contac.update({
      fname: fn || contac.fname,
      lname: ln || contac.lname,
      fixnum: fixnum || contac.fixnum,
      partnb: partnb || contac.partnb,
      type: type || contac.type,
      fax: fax || contac.fax,
    });

    return res.status(200).json(contac);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const dlt = async (req, res, _next) => {
  try {
    const contac = await contact.findByPk(req.body.id);
    if (!contac) {
      return res.status(404).json({
        message: " contact not found",
      });
    }
    await contac.dlt();
    return res.status(200).json({
      message: "contact deleted successfully",
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
