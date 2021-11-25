const { Router } = require("express");
//import { ModuleKind } from "typescript";
const router = Router();

const {
  index,
  show,
  store,
  update,
  dlt,
} = require("../controllers/court.controllers");

//Routes

router.get("/", index);
router.get("/:id/show", show);
router.get("/:id/show", show);
router.post("/create", store);
router.put("/:id/update", update);
router.delete("/:id/delete", dlt);
module.exports = router;

/**
 * @swagger
 * /api/court:
 *   get:
 *     summary: all court
 *     tags: [court]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 court:
 *                   $ref: '#/components/schemas/court'
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
 * /api/court/{id}/show:
 *   get:
 *     summary: get court by id
 *     tags: [court]
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
 *                 court:
 *                   $ref: '#/components/schemas/court'
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
 * /api/court/create:
 *   post:
 *     summary: add court
 *     tags: [court]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              -name
 *              -type
 *              -roomnum
 *              -judgename
 *             properties:
 *              name:
 *                 type: string
 *              type:
 *                type: string
 *              roomnum:
 *                type: integer
 *              judgename:
 *                type: string
 *             example:
 *              name: abs
 *              type: ays
 *              roomnum: 1
 *              judgename:cbc
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 court:
 *                   $ref: '#/components/schemas/court'
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
 * /api/court/{id}/update:
 *   put:
 *     summary: update court by id
 *     tags: [court]
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
 *              -name
 *              -type
 *              -roomnum
 *              -judgename
 *             properties:
 *              name:
 *                 type: string
 *              type:
 *                type: string
 *              roomnum:
 *                type: integer
 *              judgename:
 *                type: string
 *             example:
 *              name: abs
 *              type: ays
 *              roomnum: 1
 *              judgename:cbc
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 court:
 *                   $ref: '#/components/schemas/court'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: court Not Found
 */

/**
 * @swagger
 * /api/court/{id}/delete:
 *   delete:
 *     summary: delete court by id
 *     tags: [court]
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
 *               message: court Not Found
 */
