//richard prado
const { sql } = require("../config/db");

// GET
const getPersonas = async (req, res) => {
    try {

        const result = await sql.query`
        SELECT *
        FROM Persona
        `;

        res.json(result.recordset);

    } catch (error) {
        res.status(500).json(error);
    }
};

// GET by ID
const getPersonaById = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await sql.query`
        SELECT *
        FROM Persona
        WHERE Id = ${id}
        `;

        res.json(result.recordset[0]);

    } catch (error) {
        res.status(500).json(error);
    }
};

// POST
const createPersona = async (req, res) => {
    try {

        const {
            nombre,
            edad,
            esEstudiante,
            fechaNacimiento
        } = req.body;

        //aqui se Valida que la fecha de nacimiento no sea una fecha futura
        const hoy = new Date();
        const fecha = new Date(fechaNacimiento);

        if (fecha > hoy) {
            return res.status(400).json({
                message: "La fecha de nacimiento no puede ser futura"
            });
        }

        // aqui se Inserta la nueva columna FechaNacimiento en la base de datos
        await sql.query`
        INSERT INTO Persona (
            Nombre,
            Edad,
            EsEstudiante,
            FechaNacimiento
        )
        VALUES (
            ${nombre},
            ${edad},
            ${esEstudiante},
            ${fechaNacimiento}
        )
        `;

        res.json({
            message: "Persona creada"
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

// PUT
const updatePersona = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            nombre,
            edad,
            esEstudiante,
            fechaNacimiento
        } = req.body;

        // aqui Validamos que la fecha de nacimiento no sea una fecha futura
        const hoy = new Date();
        const fecha = new Date(fechaNacimiento);

        if (fecha > hoy) {
            return res.status(400).json({
                message: "La fecha de nacimiento no puede ser futura"
            });
        }

        // y aca Actualizamos la fecha de nacimiento de la persona
        await sql.query`
        UPDATE Persona
        SET
            Nombre = ${nombre},
            Edad = ${edad},
            EsEstudiante = ${esEstudiante},
            FechaNacimiento = ${fechaNacimiento}
        WHERE Id = ${id}
        `;

        res.json({
            message: "Persona actualizada"
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

// DELETE
const deletePersona = async (req, res) => {
    try {

        const { id } = req.params;

        await sql.query`
        DELETE FROM Persona
        WHERE Id = ${id}
        `;

        res.json({
            message: "Persona eliminada"
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getPersonas,
    getPersonaById,
    createPersona,
    updatePersona,
    deletePersona
};