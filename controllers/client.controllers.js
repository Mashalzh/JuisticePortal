/* eslint-disable no-empty */
/* eslint-disable no-empty */
import { client } from "../models";

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
   