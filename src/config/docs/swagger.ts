import swaggerJsDoc from 'swagger-jsdoc';

const options = async () => {
  return {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Chucknorris Facts',
        version: '1.0.0',
        description: 'API documentation',
      },
      components: {},
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./src/controllers/**/*.ts'],
  };
};

const specs = options().then((op) => swaggerJsDoc(op));

export default specs;
