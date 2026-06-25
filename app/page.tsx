export default function Page() {
  return (
    <main style={{ backgroundColor: '#FAFAF7' }}>
      <section className="flex flex-col items-center justify-center text-center px-4 min-h-[90vh]">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
          Virtuella visningar
        </p>
        <h1 className="text-6xl font-semibold tracking-tight mb-6 max-w-2xl leading-tight">
          Utforska ditt nästa hem i 3D
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-md">
          Upplev svenska bostäder med fotorealistiska virtuella visningar – när och var du vill.
        </p>
        <div className="flex gap-4">
          <a href="/fastigheter" className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
            Se alla fastigheter
          </a>
          <a href="#" className="border border-gray-200 text-gray-600 px-6 py-3 rounded-full text-sm hover:border-gray-400 transition-colors">
            För mäklare
          </a>
        </div>
      </section>
        
      <section className="border-t border-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-4xl font-semibold mb-2">3D</p>
            <p className="text-gray-400 text-sm">Fotorealistiska visningar</p>
          </div>
          <div>
            <p className="text-4xl font-semibold mb-2">24/7</p>
            <p className="text-gray-400 text-sm">Tillgängligt när du vill</p>
          </div>
          <div>
            <p className="text-4xl font-semibold mb-2">100%</p>
            <p className="text-gray-400 text-sm">Svenska bostäder</p>
          </div>
        </div>
      </section>
    </main>
  )
}