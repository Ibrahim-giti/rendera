export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <div className="mb-4">
        <a href="/tjanster" className="text-sm transition-colors" style={{ color: '#3E5C50' }}>← Tillbaka till tjänster</a>
      </div>

      <p className="text-sm tracking-widest uppercase mb-4 mt-8" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>360° · Webbaserad</p>
      <h1 className="text-5xl font-bold tracking-tight mb-6">Virtuell<br /><span style={{ color: '#3E5C50' }}>rundvandring.</span></h1>
      <p className="text-lg max-w-xl leading-relaxed mb-16" style={{ color: '#56605A' }}>
        En klickbar 360°-visning av hela bostaden som öppnas direkt i webbläsaren – ingen app behövs. Spekulanten rör sig fritt mellan rummen, i mobilen eller på datorn.
      </p>

      <div className="rounded-2xl h-72 mb-16 flex items-center justify-center" style={{ backgroundColor: '#F1EFE9' }}>
        <p style={{ color: '#56605A' }}>Demo-tour kommer här</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="font-semibold text-lg mb-3">Vad ingår</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Fotografering på plats</li>
            <li>✓ Färdig 3D-tour inom 48h</li>
            <li>✓ Delbar länk + embed-kod</li>
            <li>✓ Fungerar på mobil och dator</li>
            <li>✓ Ingen app behövs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Passar för</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Lägenheter</li>
            <li>✓ Villor</li>
            <li>✓ Fritidshus</li>
            <li>✓ Kommersiella lokaler</li>
          </ul>
        </div>
      </div>

      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#3E5C50' }}>
        <h3 className="text-xl font-semibold text-white mb-2">Intresserad?</h3>
        <p className="text-sm mb-6" style={{ color: '#C5D1C8' }}>Vi återkommer inom 24 timmar med mer information och prisuppgift.</p>
        <a href="/kontakt" className="inline-block px-6 py-3 rounded-full font-medium text-sm transition-colors" style={{ backgroundColor: '#C5D1C8', color: '#1E2521' }}>
          Boka fotografering →
        </a>
      </div>
    </main>
  )
}