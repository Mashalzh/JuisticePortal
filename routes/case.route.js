import { Router } from "express";
const router = Router();

import {
  index,
  show,
  store,
  update,
  dlt,
} from "../controllers/case.controllers.js";

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
 * /api/case:
 *   get:
 *     summary: all cases
 *     tags: [case]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 case:
 *                   $ref: '#/components/schemas/case'
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
 * /api/case/{id}/show:
 *   get:
 *     summary: get case by id
 *     tags: [case]
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
 *                 case:
 *                   $ref: '#/components/schemas/case'
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
 * /api/case/create:
 *   post:
 *     summary: add case
 *     tags: [case]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                -status:
 *                  -charges:
 *                  -startdate:
 *                  -topic:
 *                  -facts:
 *                   -rule:
 *                     -type:
 *                  -sessions:
 *             properties:
 *               status:
 *                   DataTypes.STRING,
 *              charges:
 *                   DataTypes.STRING,
 *              startdate:
 *                  DataTypes.DATE,
 *              topic:
 *                  DataTypes.STRING,
 *              facts:
 *                  DataTypes.STRING,
 *              rule:
 *                  DataTypes.STRING,
 *              type:
 *                  DataTypes.STRING,
 *              sessions:
 *                  DataTypes.STRING,
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 case:
 *                   $ref: '#/components/schemas/case'
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
 * /api/case/{id}/update:
 *   put:
 *     summary: update case by id
 *     tags: [case]
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
 *                -status:
 *                  -charges:
 *                  -startdate:
 *                  -topic:
 *                  -facts:
 *                   -rule:
 *                     -type:
 *                  -sessions:
 *             properties:
 *               status:
 *                   DataTypes.STRING,
 *              charges:
 *                   DataTypes.STRING,
 *              startdate:
 *                  DataTypes.DATE,
 *              topic:
 *                  DataTypes.STRING,
 *              facts:
 *                  DataTypes.STRING,
 *              rule:
 *                  DataTypes.STRING,
 *              type:
 *                  DataTypes.STRING,
 *              sessions:
 *                  DataTypes.STRING,
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 case:
 *                   $ref: '#/components/schemas/case'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: case Not Found
 */

/**
 * @swagger
 * /api/case/{id}/delete:
 *   delete:
 *     summary: delete case by id
 *     tags: [case]
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
 *               message: case Not Found
 */
