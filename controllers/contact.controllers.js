/* eslint-disable no-empty */
import { contact } from "../models";

const index = async (req, res, next) => {
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
