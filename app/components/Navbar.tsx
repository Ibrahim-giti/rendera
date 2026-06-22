import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Link href="/" className="text-xl font-semibold tracking-tight">
        Rendera
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/fastigheter" className="text-sm text-gray-500 hover:text-black transition-colors">
          Fastigheter
        </Link>
  <Link href="/login" className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
    Admin
  </Link>
      </div>
    </nav>
  )
}