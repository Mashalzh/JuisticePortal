const user = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const pkg = require("typescript");
const { validateLocaleAndSetLanguage } = pkg;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const index = async function (req, res, _next) {
  try {
    const users = await user.findAll({
      tablename: "user",
    });
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const login = async function (req, res, _next) {
  const errors = validationResult(req);
  try {
    body("email").isEmail().normalizeEmail(),
      body("password")
        .isLength({
          min: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
        })
        .withMessage(
          "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"
        );
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const changepw = async (req, res, _next) => {
  try {
    const { password, newpassword } = await req.body;
    const usr = await user.findByPk(req.body.id);
    if (!usr) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    return await bcrypt.compare(password, user.password, (error, response) => {
      if (error) {
        return res.status(400).json({
          message: error,
          success: false,
        });
      }

      if (response) {
        const hashPassword = bcrypt.hashSync(
          newpassword,
          bcrypt.genSaltSync(16),
          null
        );
        usr.update({
          password: hashPassword,
        });
        return res.status(200).json(usr);
      }
      return res.status(400).json({
        message: "password not matched",
        success: false,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const show = async (req, res, _next) => {
  try {
    const usr = await user.findByPk(req.params.id);

    if (!usr) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    return res.status(200).json(usr);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
const store = async (req, res, _next) => {
  try {
    const { name, email } = await req.body;
    const usr = await user.create({
      name,
      email,
      password: bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(16),
        null
      ),
      id: req.body.id,
    });
    return res.status(400).json(usr);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res, _next) => {
  try {
    const { name, email, id: Uid } = await req.body;
    const usr = await user.findByPk(req.body.id);

    if (!usr) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    await usr.update({
      name: name || user.name,
      email: email || user.email,
      id: Uid || user.id,
    });

    return res.status(200).json(usr);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const dlt = async (req, res, _next) => {
  try {
    const usr = await user.findByPk(req.body.id);
    if (!usr) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    await usr.dlt();
    return res.status(400).json({
      message: "User Dleted Sucessfully",
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
  changepw,
  login,
};
