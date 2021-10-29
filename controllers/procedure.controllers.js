/* eslint-disable no-empty */
import { procedure } from "../models";

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

const show = async (req, res, next) => {
  try {
  } catch {}
};
const store = async (req, res, next) => {
  try {
  } catch {}
};

const update = async (req, res, next) => {
  try {
  } catch {}
};

const dlt = async (req, res, next) => {
  try {
  } catch {}
};
