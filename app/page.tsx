export default function Page() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-5xl font-bold mb-4">Utforska hem i 3D</h1>
        <p className="text-gray-500 text-lg mb-8">Virtuella visningar av svenska bostäder</p>
      <a href="/fastigheter" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
        Se alla fastigheter
      </a>
      </section>
    </main>
  )
}