const fastigheter = [
  {
    id: "1",
    titel: "Storgatan 12",
    stad: "Stockholm",
    pris: 4500000,
    storlek: 72,
  },
  {
    id: "2",
    titel: "Kungsgatan 5",
    stad: "Göteborg",
    pris: 3200000,
    storlek: 58,
  },
  {
    id: "3",
    titel: "Drottninggatan 8",
    stad: "Malmö",
    pris: 2800000,
    storlek: 65,
  },
]

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Fastigheter</h1>
      <div className="grid grid-cols-3 gap-6">
        {fastigheter.map((f) => (
          <a href={`/fastigheter/${f.id}`} key={f.id} className="border rounded-xl p-4 hover:shadow-md transition">
            <div className="bg-gray-100 h-48 rounded-lg mb-4"></div>
            <h2 className="font-semibold">{f.titel}</h2>
            <p className="text-gray-500 text-sm">{f.stad}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>{f.storlek} m²</span>
              <span className="font-medium">{f.pris.toLocaleString("sv-SE")} kr</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}