import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  )
}