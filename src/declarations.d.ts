/**
 * Ambient module declarations for imports TypeScript does not ship types for.
 */

/** CSS modules / side-effect CSS imports in components. */
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

/** Minimal props for the OpenAPI docs page at /api-docs. */
declare module "swagger-ui-react" {
  import type { ComponentType } from "react";

  export interface SwaggerUIProps {
    spec?: Record<string, unknown>;
    docExpansion?: "list" | "full" | "none";
    defaultModelsExpandDepth?: number;
    requestInterceptor?: (req: { credentials?: string }) => {
      credentials?: string;
    };
  }

  const SwaggerUI: ComponentType<SwaggerUIProps>;
  export default SwaggerUI;
}
