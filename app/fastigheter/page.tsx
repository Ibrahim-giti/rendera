import { supabase } from "../lib/supabase"

export default async function Page() {
  const { data: fastigheter, error } = await supabase
    .from("properties")
    .select("*")
    .eq("status", "active")


  console.log("fastigheter:", fastigheter)
  console.log("error:", error)

  return (
    <main className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Fastigheter</h1>
      <div className="grid grid-cols-3 gap-6">
        {fastigheter?.map((f) => (
          <a href={`/fastigheter/${f.id}`} key={f.id} className="border rounded-xl p-4 hover:shadow-md transition">
            <div className="bg-gray-100 h-48 rounded-lg mb-4"></div>
            <h2 className="font-semibold">{f.title}</h2>
            <p className="text-gray-500 text-sm">{f.city}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>{f.size_sqm} m²</span>
              <span className="font-medium">{f.price.toLocaleString("sv-SE")} kr</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
