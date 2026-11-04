import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b" style={{ backgroundColor: '#FAFAF7', borderColor: '#E2DFD6' }}>
      <Link href="/" className="text-xl font-semibold tracking-tight">
        Rendera
      </Link>
      <div className="flex items-center gap-5 md:gap-8">
        <Link href="/tjanster" className="hidden sm:inline text-sm transition-colors" style={{ color: '#56605A' }}>
          Tjänster
        </Link>
        <Link href="/visningar" className="text-sm transition-colors" style={{ color: '#56605A' }}>
          Visningar
        </Link>
        <Link href="/kontakt" className="hidden sm:inline text-sm transition-colors" style={{ color: '#56605A' }}>
          Kontakt
        </Link>
        <Link href="/kontakt" className="text-sm px-4 py-2 rounded-full text-white transition-colors" style={{ backgroundColor: '#3E5C50' }}>
          Boka nu
        </Link>
      </div>
    </nav>
  )
}
