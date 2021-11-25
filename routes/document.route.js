const { Router } = require("express");
const router = Router();

const {
  index,
  show,
  store,
  update,
  dlt,
} = require("../controllers/document.controllers");

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
 * /api/document:
 *   get:
 *     summary: all document
 *     tags: [document]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 document:
 *                   $ref: '#/components/schemas/document'
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
 * /api/document/{id}/show:
 *   get:
 *     summary: get document by id
 *     tags: [document]
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
 *                 document:
 *                   $ref: '#/components/schemas/document'
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
 * /api/document/create:
 *   post:
 *     summary: add document
 *     tags: [document]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *               - case_id
 *               - user_id
 *               - status
 *               - createdate
 *             properties:
 *               title
 *               body:
 *                  type: text
 *               case_id:
 *                  type: ineteger
 *               user_id:
 *                  type: ineteger
 *               status:
 *                  type: string
 *               createdate:
 *                  type: date
 *             example:
 *                 title: abc
 *                 body: xyz
 *                 case_id:1
 *                 user_id:1
 *                 status:string
 *                 createdate: 12_12_21
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 document:
 *                   $ref: '#/components/schemas/document'
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
 * /api/document/{id}/update:
 *   put:
 *     summary: update document by id
 *     tags: [document]
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
 *              required:
 *               - title
 *               - body
 *               - case_id
 *               - user_id
 *               - status
 *               - createdate
 *             properties:
 *               title
 *               body:
 *                  type: text
 *               case_id:
 *                  type: ineteger
 *               user_id:
 *                  type: ineteger
 *               status:
 *                  type: string
 *               createdate:
 *                  type: date
 *             example:
 *                 title: abc
 *                 body: xyz
 *                 case_id:1
 *                 user_id:1
 *                 status:string
 *                 createdate: 12_12_21
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 document:
 *                   $ref: '#/components/schemas/document'
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
 * /api/document/{id}/delete:
 *   delete:
 *     summary: delete document by id
 *     tags: [document]
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
