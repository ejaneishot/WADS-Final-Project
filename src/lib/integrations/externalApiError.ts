export class ExternalApiError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, status = 502, code = "EXTERNAL_API_ERROR") {
    super(message);
    this.name = "ExternalApiError";
    this.status = status;
    this.code = code;
  }
}

/** Safe message for API responses — never includes upstream bodies or secrets. */
export function publicExternalApiMessage(error: unknown): string {
  if (error instanceof ExternalApiError) return error.message;
  return "External service request failed";
}
