import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Mesaj Otopsisi", description: "Mesajların altında yatan anlamı eğlenceli bir otopsi raporuna dönüştürür." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
