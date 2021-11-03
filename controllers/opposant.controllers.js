import opposant from "../models/opposant.js";

const index = async (req, res, next) => {
  try {
    const opposants = await opposant.findAll({
      tablename: "opposant",
    });
    return res.status(200).json(opposants);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const show = async (req, res, next) => {
  try {
    const oppo = await opposant.findByPk(req.params.id);

    if (!oppo) {
      return res.status(404).json({
        message: "Opposant Not Found",
      });
    }
    return res.status(200).json(oppo);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, next) => {
  try {
    const { fname, lname, address, phone, CNIC } = await req.body;
    const oppo = await opposant.create({
      fname,
      lname,
      address,
      phone,
      CNIC,
    });

    return res.status(400).json(oppo);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { fname, lname, address, phone, CNIC } = await req.body;
    const oppo = await opposant.findByPk(req.body.id);

    if (!oppo) {
      return res.status(404).json({
        message: "Opposant Not Found",
      });
    }

    await oppo.update({
      fname: fname || oppo.fname,
      lname: lname || oppo.lname,
      address: address || oppo.address,
      phone: phone || oppo.address,
      CNIC: CNIC || oppo.CNIC,
    });

    return res.status(200).json(oppo);
  } catch (err) {
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const oppo = await opposant.findByPk(req.body.id);
    if (!oppo) {
      return res.status(404).json({
        message: "Opposant not found",
      });
    }
    await oppo.dlt();
    return res.status(400).json({
      message: "Opposant Dleted Sucessfully",
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
