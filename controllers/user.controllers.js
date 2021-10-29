/* eslint-disable no-empty */
import { user } from "../models";

const index = async (req, res, next) => {
  try {
    const users = await user.findAll({
      tablename: "session",
    });
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};


const changepw = async (req, res, next) => {
    try{

    }catch{

    }
  },

const show = async(req, res, next) => {
    try{

    }catch{

    }
};
const store = async(req, res, next) => {
    try{

    }catch{

    }
};

const update = async(req, res, next) => {
    try{

    }catch{

    }
};

const dlt = async(req, res, next) => {
    try{

    }catch{

    }
};

  