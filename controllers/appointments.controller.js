/* eslint-disable no-empty */
import { session } from "../models";

const index = async (req, res, next) => {
  try {
    const sessions = await session.findAll({
      tablename: "session",
    });
    return res.status(200).json(sessions);
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
