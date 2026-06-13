

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <a href="/" className="text-xl font-semibold">Rendera</a>
      <div className="flex gap-6">
        <a href="/fastigheter" className="text-gray-600 hover:text-black">Fastigheter</a>
      </div>
    </nav>
  )
}