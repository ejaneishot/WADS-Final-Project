/**
 * Typed errors for outbound HTTP integrations (job board, etc.).
 * Maps internal failures to safe client-facing messages and HTTP status codes.
 */

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

/** Expose only known external API messages; hide unexpected stack details from clients. */
export function publicExternalApiMessage(error: unknown): string {
  if (error instanceof ExternalApiError) return error.message;
  return "External service request failed";
}
