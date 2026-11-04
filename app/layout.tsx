import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rendera – virtuella 3D-visningar av bostäder",
  description: "Vi skannar bostäder i 3D åt mäklare, husbolag och privatpersoner. Visningen öppnas direkt i webbläsaren – ingen app behövs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="pt-16" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", background: '#FAFAF7' }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}