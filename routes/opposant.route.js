import { Router } from "express";
const router = Router();

import {
  index,
  show,
  store,
  update,
  dlt,
} from "../controllers/opposant.controllers.js";

//Routes

router.get("/", index);
router.get("/:id/show", show);
router.get("/:id/show", show);
router.post("/create", store);
router.put("/:id/update", update);
router.delete("/:id/delete", dlt);

export default router;

/**
 * @swagger
 * /api/opposant:
 *   get:
 *     summary: all opposant
 *     tags: [opposant]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 opposant:
 *                   $ref: '#/components/schemas/opposant'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/opposant/{id}/show:
 *   get:
 *     summary: get opposant by id
 *     tags: [opposant]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *             example:
 *               id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 opposant:
 *                   $ref: '#/components/schemas/opposant'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/opposant/create:
 *   post:
 *     summary: add opposant
 *     tags: [opposant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                  -fname
 *                  -lname
 *                  -address
 *                  -CNIC
 *                  -phone
 *             properties:
 *                  fname:
 *                    type: string
 *                  lname:
 *                    type: string
 *                  address:
 *                    type: string
 *                  CNIC:
 *                    type: integer
 *                  phone:
 *                    type: integer
 *             example:
 *                  fname: abc
 *                  lname: abc
 *                  address: ayzzz
 *                  CNIC: 1234569876321
 *                  phone: 12345678911
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 opposant:
 *                   $ref: '#/components/schemas/opposant'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/opposant/{id}/update:
 *   put:
 *     summary: update opposant by id
 *     tags: [opposant]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                  -fname
 *                  -lname
 *                  -address
 *                  -CNIC
 *                  -phone
 *             properties:
 *                  fname:
 *                    type: string
 *                  lname:
 *                    type: string
 *                  address:
 *                    type: string
 *                  CNIC:
 *                    type: integer
 *                  phone:
 *                    type: integer
 *             example:
 *                  fname: abc
 *                  lname: abc
 *                  address: ayzzz
 *                  CNIC: 1234569876321
 *                  phone: 12345678911
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 opposant:
 *                   $ref: '#/components/schemas/opposant'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: contact Not Found
 */

/**
 * @swagger
 * /api/opposant/{id}/dlt:
 *   dlt:
 *     summary: delete opposant by id
 *     tags: [opposant]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *             example:
 *               id: 1
 *     responses:
 *       "204":
 *         description: OK
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: opposant Not Found
 */
