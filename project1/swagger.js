const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'Users API'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/users.js'];

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);