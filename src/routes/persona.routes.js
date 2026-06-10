//richard prado
const express = require("express");

const router = express.Router();

const {
    getPersonas,
    getPersonaById,
    createPersona,
    updatePersona,
    deletePersona
} = require("../controllers/persona.controller");

/**
 * @swagger
 * /api/personas:
 *   get:
 *     summary: Obtener todas las personas
 *     responses:
 *       200:
 *         description: Lista de personas
 */
router.get("/", getPersonas);

/**
 * @swagger
 * /api/personas/{id}:
 *   get:
 *     summary: Obtener persona por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona encontrada
 */
router.get("/:id", getPersonaById);

/**
 * @swagger
 * /api/personas:
 *   post:
 *     summary: Crear persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *               esEstudiante:
 *                 type: boolean
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Persona creada
 */
// Documentacion Swagger para crear una persona con fecha de nacimiento
router.post("/", createPersona);

/**
 * @swagger
 * /api/personas/{id}:
 *   put:
 *     summary: Actualizar persona
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               edad:
 *                 type: integer
 *               esEstudiante:
 *                 type: boolean
 *               fechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Persona actualizada
 */
// Documentacion Swagger para actualizar una persona incluyendo fecha de nacimiento
router.put("/:id", updatePersona);

/**
 * @swagger
 * /api/personas/{id}:
 *   delete:
 *     summary: Eliminar persona
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona eliminada
 */
router.delete("/:id", deletePersona);

module.exports = router;