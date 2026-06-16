import { supabase } from "../lib/supabase"

export default async function Page() {
  const { data: fastigheter } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "active")

  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <div className="mb-12">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">Tillgängliga objekt</p>
        <h1 className="text-4xl font-semibold tracking-tight">Fastigheter</h1>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {fastigheter?.map((f) => (
          
           <a href={`/fastigheter/${f.id}`}
            key={f.id}
            className="group cursor-pointer"
          >
            <div className="bg-gray-100 rounded-2xl h-56 mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="px-1">
              <h2 className="font-medium text-lg mb-1">{f.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{f.city}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{f.size_sqm} m² · {f.rooms} rum</span>
                <span className="font-medium">{f.price.toLocaleString("sv-SE")} kr</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}