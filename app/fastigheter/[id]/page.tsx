import { supabase } from "../../lib/supabase"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: fastighet } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single()

  if (!fastighet) return <p>Fastigheten hittades inte</p>

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <div className="mb-8">
        <a href="/fastigheter" className="text-sm text-gray-400 hover:text-black transition-colors">
          ← Tillbaka
        </a>
      </div>

      {fastighet.tour_url ? (
        <iframe
          src={fastighet.tour_url}
          className="w-full aspect-video rounded-2xl mb-10"
          allowFullScreen
        />
      ) : (
        <div className="aspect-video w-full bg-gray-100 rounded-2xl mb-10 flex items-center justify-center text-gray-300 text-sm">
          Ingen tour tillgänglig
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">{fastighet.title}</h1>
          <p className="text-gray-400">{fastighet.city}</p>
        </div>
        <p className="text-2xl font-semibold">{fastighet.price.toLocaleString("sv-SE")} kr</p>
      </div>

      <div className="flex gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
        <span>{fastighet.size_sqm} m²</span>
        <span>{fastighet.rooms} rum</span>
      </div>

      <p className="text-gray-600 leading-relaxed">{fastighet.description}</p>
    </main>
  )
}