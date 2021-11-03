import document from "../models/document.js";

const index = async (req, res, next) => {
  try {
    const documents = await document.findAll({
      tablename: "document",
    });
    return res.status(200).json(documents);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const doc = await document.findByPk(req.params.id);
    if (!doc) {
      return res.status(404).json({
        message: "Document Not Found",
      });
    }
    return res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, _next) => {
  try {
    const { name, size } = req.body;

    const doc = await document.create({
      name,
      size,
    });

    return res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const { id, name, size } = req.body;

    const doc = await document.findByPk(id);
    if (!doc) {
      return res.status(404).json({
        message: "Document Not Found",
      });
    }
    await doc.update({
      name: name || doc.name,
      size: size || doc.size,
    });

    return res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const dlt = async (req, res, next) => {
  try {
    const doc = await document.findByPk(req.body.id);
    if (!doc) {
      return res.status(404).json({
        message: " Document not found",
      });
    }
    await doc.dlt();
    return res.status(200).json({
      message: "Document deleted successfully",
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
