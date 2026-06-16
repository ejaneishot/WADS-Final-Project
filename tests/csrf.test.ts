import { isAllowedOrigin, isMutatingMethod } from "@/lib/csrf";

function makeRequest(headers: Record<string, string> = {}) {
  return {
    headers: {
      get(name: string) {
        const key = Object.keys(headers).find(
          (k) => k.toLowerCase() === name.toLowerCase(),
        );
        return key ? headers[key] : null;
      },
    },
  } as Request;
}

describe("CSRF origin checks", () => {
  const originalAppUrl = process.env.APP_URL;

  beforeEach(() => {
    process.env.APP_URL = "https://smartcareer.academy";
  });

  afterEach(() => {
    process.env.APP_URL = originalAppUrl;
  });

  it("treats POST as mutating", () => {
    expect(isMutatingMethod("POST")).toBe(true);
    expect(isMutatingMethod("GET")).toBe(false);
  });

  it("allows same-origin requests", () => {
    const req = makeRequest({ origin: "https://smartcareer.academy" });
    expect(isAllowedOrigin(req)).toBe(true);
  });

  it("blocks cross-site form posts", () => {
    const req = makeRequest({ origin: "https://evil.example" });
    expect(isAllowedOrigin(req)).toBe(false);
  });

  it("blocks requests with no origin or referer", () => {
    const req = makeRequest();
    expect(isAllowedOrigin(req)).toBe(false);
  });
});
