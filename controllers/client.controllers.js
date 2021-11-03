import client from "../models/client.js";
const index = async (req, res, next) => {
  try {
    const clients = await client.findAll({
      tablename: "client",
    });
    return res.status(200).json(client);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const show = async (req, res, next) => {
  try {
    const clint = await client.findByPk(req.params.id);

    if (!clint) {
      return res.status(404).json({
        message: "client Not Found",
      });
    }
    return res.status(200).json(clint);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, next) => {
  try {
    const { fname, lname, address, phone, CNIC } = await req.body;
    const clint = await client.create({
      fname,
      lname,
      address,
      phone,
      CNIC,
    });

    return res.status(400).json(client);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { fname, lname, address, phone, CNIC } = await req.body;
    const clint = await client.findByPk(req.body.id);

    if (!clint) {
      return res.status(404).json({
        message: "client Not Found",
      });
    }

    await clint.create({
      fname: fname || client.fname,
      lname: lname || client.lname,
      address: address || client.address,
      phone: phone || client.address,
      CNIC: CNIC || client.CNIC,
    });

    return res.status(200).json(clint);
  } catch (err) {
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const clint = await client.findByPk(req.body.id);
    if (!clint) {
      return res.status(404).json({
        message: "client not found",
      });
    }
    await clint.dlt();
    return res.status(400).json({
      message: "client Dleted Sucessfully",
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
