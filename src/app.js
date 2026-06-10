//richard prado
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const express = require("express");
const cors = require("cors");
const clienteRoutes = require("./routes/cliente.routes");
const personaRoutes = require("./routes/persona.routes");

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Clientes',
      version: '1.0.0',
      description: 'API para gestionar clientes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Paths to files containing OpenAPI definitions
};

app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/clientes", clienteRoutes);
app.use("/api/personas", personaRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;