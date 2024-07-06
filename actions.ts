"use server";

import { cookies } from "next/headers";

export async function changeLang(lang: string, locale: string) {
  if (lang == locale) {
    return;
  }
  const currentDate = new Date()
  const expireDate = new Date(currentDate).setFullYear(currentDate.getFullYear() + 1)
  cookies().set("locale", lang, {
    expires: expireDate
  });
}
