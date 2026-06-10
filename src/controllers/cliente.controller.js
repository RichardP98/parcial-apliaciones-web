//richard prado
const { sql } = require("../config/db");

// GET
const getClientes = async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM Clientes");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json(error);
    }
};

// GET by ID
const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await sql.query`
        SELECT * FROM Clientes WHERE Id = ${id}
        `;
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json(error);
    }
};

// POST
const createCliente = async (req, res) => {
    try {
        const { nombre, email, telefono } = req.body;
        await sql.query`
        INSERT INTO Clientes (Nombre, Email, Telefono)
        VALUES (${nombre}, ${email}, ${telefono})
        `;
        res.json({ message: "Cliente creado" });
    } catch (error) {
        res.status(500).json(error);
    }
};

// PUT
const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono } = req.body;
        await sql.query`
        UPDATE Clientes
        SET Nombre=${nombre}, Email=${email}, Telefono=${telefono}
        WHERE Id=${id}
        `;
        res.json({ message: "Cliente actualizado" });
    } catch (error) {
        res.status(500).json(error);
    }
};

// DELETE
const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.query`
        DELETE FROM Clientes WHERE Id=${id}
        `;
        res.json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};