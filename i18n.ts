import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const locale = cookies().get("locale")?.value || "en";

  return {
    locale,
    messages: (await import(`./locale/${locale}.json`)).default,
  };
});
