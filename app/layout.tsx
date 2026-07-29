import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "PackCam | Quay tự động, lưu trữ an toàn",
  description:
    "Landing page chính thức của PackCam với bộ banner, poster và link tải Windows installer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
