import { Router } from "express";
const router = Router();

import {
  index,
  show,
  store,
  update,
  dlt,
} from "../controllers/appointments.controller.js";

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
 * /api/appointment:
 *   get:
 *     summary: all appointment
 *     tags: [appointment]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 appointment:
 *                   $ref: '#/components/schemas/appointment'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: appointment Not Found
 */

/**
 * @swagger
 * /api/appointment/{id}/show:
 *   get:
 *     summary: get appointment by id
 *     tags: [appointment]
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
 *                 appointment:
 *                   $ref: '#/components/schemas/appointment'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: appointment Not Found
 */

/**
 * @swagger
 * /api/appointment/create:
 *   post:
 *     summary: add appointment
 *     tags: [appointment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                  -subject
 *                  -startdate
 *                  -enddate
 *                  -starttime
 *                  -endtime
 *             properties:
 *                  subject:
 *                    type: string
 *                  startdate:
 *                     type: string
 *                  enddate:
 *                     type: string
 *                  starttime:
 *                      type: time
 *                  endtime:
 *                      type: time
 *             example:
 *                  subject: abc
 *                  startdate: 12-12-21
 *                  enddate: 12-12-21
 *                  starttime: 00:00
 *                  endtime: 00:00
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 appointment:
 *                   $ref: '#/components/schemas/appointment'
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
 * /api/appointment/{id}/update:
 *   put:
 *     summary: update appointment by id
 *     tags: [sesappointmentsion]
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
 *                  -subject
 *                  -startdate
 *                  -enddate
 *                  -starttime
 *                  -endtime
 *             properties:
 *                  subject:
 *                    type: string
 *                  startdate:
 *                     type: string
 *                  enddate:
 *                     type: string
 *                  starttime:
 *                      type: time
 *                  endtime:
 *                      type: time
 *             example:
 *                  subject: abc
 *                  startdate: 12-12-21
 *                  enddate: 12-12-21
 *                  starttime: 00:00
 *                  endtime: 00:00
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 appointment:
 *                   $ref: '#/components/schemas/appointment'
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
 * /api/appointment/{id}/delete:
 *   delete:
 *     summary: delete appointment by id
 *     tags: [appointment]
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
 *               message: appointment Not Found
 */
