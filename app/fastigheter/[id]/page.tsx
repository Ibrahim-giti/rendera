export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Storgatan 12</h1>
      <p className="text-gray-500 mb-8">Stockholm</p>

      <div className="aspect-video w-full bg-gray-100 rounded-xl mb-8 flex items-center justify-center text-gray-400">
        Matterport-tour kommer här
      </div>

      <div className="flex gap-8 text-sm text-gray-600">
        <span>72 m²</span>
        <span>4 500 000 kr</span>
      </div>
    </main>
  )
}