"use server";

import { cookies } from "next/headers";

export async function changeLang(lang: string, locale: string) {
  if (lang == locale) {
    return;
  }

  cookies().set("locale", lang);
}
