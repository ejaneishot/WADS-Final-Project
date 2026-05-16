import { secureFetch } from "@/lib/integrations/secureFetch";
import { ExternalApiError } from "@/lib/integrations/externalApiError";

describe("secureFetch", () => {
  it("rejects non-HTTPS URLs", async () => {
    await expect(
      secureFetch("http://remotive.com/api/remote-jobs", {
        allowedHosts: ["remotive.com"],
      }),
    ).rejects.toBeInstanceOf(ExternalApiError);
  });

  it("rejects hosts outside the allowlist", async () => {
    await expect(
      secureFetch("https://evil.example.com/jobs", {
        allowedHosts: ["remotive.com"],
      }),
    ).rejects.toMatchObject({ message: "External API host is not allowed" });
  });
});
