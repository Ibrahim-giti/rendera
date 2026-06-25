import Navbar from "./components/Navbar"
import "./globals.css"

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