// src/declarations.d.ts
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

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
