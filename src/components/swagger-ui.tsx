"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type OpenApiSpec = Record<string, unknown>;

export default function Swagger({ spec }: { spec: OpenApiSpec }) {
  return (
    <SwaggerUI
      spec={spec}
      docExpansion="list"
      defaultModelsExpandDepth={1}
      requestInterceptor={(req) => {
        req.credentials = "include";
        return req;
      }}
    />
  );
}
