import "./globals.css";
import { Inter } from "next/font/google";

import PlausibleProvider from "next-plausible";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parked by datagutt",
  description: "This domain is parked by datagutt",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const domain = headersList.get("host");
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain={domain} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
