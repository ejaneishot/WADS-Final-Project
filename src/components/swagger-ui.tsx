// src/components/swagger-ui.tsx
/**
 * Swagger UI wrapper for /docs — enables cookie credentials on try-it-out requests.
 */
"use client"; // Mandatory because swagger-ui-react relies on internal React states, lifecycle effects, and direct DOM browser manipulation APIs that don't exist in Server runtimes.

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

// Structural data signature modeling the configuration layout map parameters
type OpenApiSpec = Record<string, unknown>;

export default function Swagger({ spec }: { spec: OpenApiSpec }) {
  return (
    <SwaggerUI
      spec={spec}
      // Controls list tree behavior to maintain screen space footprint optimization
      docExpansion="list"
      // Restricts deep nesting models from expanding inside the initial screen parse phase
      defaultModelsExpandDepth={1}
      /**
       * Intercepts sandbox endpoint requests to wire state credentials.
       * Mandatory to pass standard HTTPOnly verification headers to authenticated downstream microservices.
       */
      requestInterceptor={(req) => {
        req.credentials = "include"; // Appends active browser authentication sessions to test passes
        return req; // Bubbles up modified parameters to execute network transmission
      }}
    />
  );
}
