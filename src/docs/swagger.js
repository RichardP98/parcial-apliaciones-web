//richard prado
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API Clientes",
        version: "1.0.0",
        description: "Documentacion API CRUD Clientes"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;