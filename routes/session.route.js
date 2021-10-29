import { Router } from "express";
const router = Router();

import {
  index,
  show,
  store,
  update,
  dlt,
} from "../controllers/session.controllers.js";

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
 * /api/session:
 *   get:
 *     summary: all session
 *     tags: [session]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 session:
 *                   $ref: '#/components/schemas/session'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: session Not Found
 */

/**
 * @swagger
 * /api/session/{id}/show:
 *   get:
 *     summary: get session by id
 *     tags: [session]
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
 *                 session:
 *                   $ref: '#/components/schemas/session'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: session Not Found
 */

/**
 * @swagger
 * /api/session/create:
 *   post:
 *     summary: add session
 *     tags: [session]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *             -date
 *             -decision
 *             -outcomes
 *             -court
 *             properties:
 *             date:
 *              type: date
 *             decision:
 *              type: string
 *             outcomes:
 *              type: string
 *             court:
 *              type:string
 *             example:
 *             date: 12-12-21
 *             decision: xyz
 *             outcomes: abc
 *             court: abs
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 session:
 *                   $ref: '#/components/schemas/session'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 *

/**
 * @swagger
 * /api/session/{id}/update:
 *   put:
 *     summary: update session by id
 *     tags: [session]
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
 *             -date
 *             -decision
 *             -outcomes
 *             -court
 *             properties:
 *             date:
 *              type: date
 *             decision:
 *              type: string
 *             outcomes:
 *              type: string
 *             court:
 *              type:string
 *             example:
 *             date: 12-12-21
 *             decision: xyz
 *             outcomes: abc
 *             court: abs
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 session:
 *                   $ref: '#/components/schemas/session'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: session Not Found
 */

/**
 * @swagger
 * /api/session/{id}/delete:
 *   delete:
 *     summary: delete session by id
 *     tags: [session]
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
