/* eslint-disable no-empty */
import { case1 } from "../models";

const index = async (req, res, next) => {
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
