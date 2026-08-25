import { defineRouting } from "next-intl/routing";

export const SUPPORTED_LOCALES = ["fr", "en"];
export const DEFAULT_LOCALE = "fr";

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always",
});
