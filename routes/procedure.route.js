import { Router } from "express";
const router = Router();

import {
  index,
  show,
  store,
  update,
  dlt,
} from "../controllers/procedure.controllers.js";

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
 * /api/procedure:
 *   get:
 *     summary: all procedure
 *     tags: [procedure]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 procedure:
 *                   $ref: '#/components/schemas/procedure'
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
 * /api/procedure/{id}/show:
 *   get:
 *     summary: get procedure by id
 *     tags: [procedure]
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
 *                 procedure:
 *                   $ref: '#/components/schemas/procedure'
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
 * /api/procedure/create:
 *   post:
 *     summary: add procedure
 *     tags: [procedure]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - desc
 *               - date
 *             properties:
 *               title
 *               desc:
 *                  type: text
 *               date:
 *                  type: date
 *             example:
 *                 desc: abc
 *                 date: 12_12_21
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 procedure:
 *                   $ref: '#/components/schemas/procedure'
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
 * /api/procedure/{id}/update:
 *   put:
 *     summary: update procedure by id
 *     tags: [procedure]
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
 *               - desc
 *               - date
 *             properties:
 *               title
 *               desc:
 *                  type: text
 *               date:
 *                  type: date
 *             example:
 *                 desc: abc
 *                 date: 12_12_21
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 procedure:
 *                   $ref: '#/components/schemas/procedure'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: User Not Found
 */

/**
 * @swagger
 * /api/procedure/{id}/delete:
 *   delete:
 *     summary: delete procedure by id
 *     tags: [procedure]
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
 *               message: User Not Found
 */
