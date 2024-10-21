import type { Metadata } from "next";
import { El_Messiri, Inter } from "next/font/google";
import ContactModal from "@/components/ui/ContactModal";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const el_messiri = El_Messiri({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Mahmoud Ahmed's Portfolio",
  description: "Mahmoud Ahmed's Personal Portfolio",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${locale == "en" ? inter.className : el_messiri.className} dark`}>
        <NextIntlClientProvider messages={messages}>
          <ContactModal />
          <div dir={locale == "en" ? "ltr" : "rtl"}>{children}</div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
