// import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Rajdhani } from "next/font/google";

// import { inter } from "@/app/ui/fonts";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.scss";
import "../public/assets/scss/custom-bootstrap.scss";

const rajdhani = Rajdhani({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "500", "700"], // Add specific weights
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}

      <body className={`${rajdhani.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
