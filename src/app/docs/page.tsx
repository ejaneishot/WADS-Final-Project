import { getApiDocs } from "@/lib/swagger";
import Swagger from "@/components/swagger-ui";

export default function DocsPage() {
  const spec = getApiDocs();

  return <Swagger spec={spec} />;
}
