import "server-only";
import swaggerJSDoc from "swagger-jsdoc";

export function getApiDocs() {
  const spec = swaggerJSDoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "WADS Final Project API",
        version: "1.0.0",
      },
    },
    apis: ["src/app/api/**/*.ts"], // where your JSDocs are
  });

  return spec;
}
