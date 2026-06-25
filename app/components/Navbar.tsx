import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b" style={{ backgroundColor: '#FAFAF7', borderColor: '#E2DFD6' }}>
      <Link href="/" className="text-xl font-semibold tracking-tight">
        Rendera
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/fastigheter" className="text-sm transition-colors" style={{ color: '#56605A' }}>
          Fastigheter
        </Link>
        <Link href="/login" className="text-sm px-4 py-2 rounded-full text-white transition-colors" style={{ backgroundColor: '#3E5C50' }}>
          Admin
        </Link>
      </div>
    </nav>
  )
}