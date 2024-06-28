const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'BI Services',
    description: 'Description'
  },
  host: 'localhost:8800'
};

const outputFile = './swagger-output.json';
const routes = ['./src/app.ts'];


swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./src/app.ts')
});
