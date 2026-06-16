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
    <main className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">{fastighet.title}</h1>
      <p className="text-gray-500 mb-8">{fastighet.city}</p>

      <div className="aspect-video w-full bg-gray-100 rounded-xl mb-8 flex items-center justify-center text-gray-400">
        Matterport-tour kommer här
      </div>

      <div className="flex gap-8 text-sm text-gray-600 mb-4">
        <span>{fastighet.size_sqm} m²</span>
        <span>{fastighet.rooms} rum</span>
        <span>{fastighet.price.toLocaleString("sv-SE")} kr</span>
      </div>

      <p className="text-gray-700">{fastighet.description}</p>
    </main>
  )
}