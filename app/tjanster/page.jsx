export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-24">
      <div className="mb-16">
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Tjänster</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6">Tre sätt att visa mer –<br /><span style={{ color: '#3E5C50' }}>innan första visningen.</span></h1>
        <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>Allt fotograferas på plats av oss och levereras färdigt att lägga in i annonsen, dela som länk eller skicka till spekulanter.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <a href="/tjanster/360" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
          <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>⊕</div>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>360° · Webbaserad</p>
          <h2 className="text-xl font-semibold mb-3">Virtuell rundvandring</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En klickbar 360°-visning av hela bostaden som öppnas direkt i webbläsaren – ingen app behövs. Spekulanten rör sig fritt mellan rummen, i mobilen eller på datorn.</p>
          <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer om rundvandringar →</span>
        </a>

        <a href="/tjanster/dronare" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
          <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#EADFC7', color: '#6E5436' }}>✦</div>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Drönare · Villa & Skog</p>
          <h2 className="text-xl font-semibold mb-3">Drönarbilder</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>Flygfoton som visar läget, tomten och omgivningen – det markbilder aldrig kan. Särskilt värdefullt för villor, gårdar och skogsfastigheter där arealen är halva affären.</p>
          <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer om drönarfoto →</span>
        </a>

        <a href="/tjanster/planritning" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
          <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>⊞</div>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>3D · Planlösning</p>
          <h2 className="text-xl font-semibold mb-3">3D-planritning</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En tydlig planritning i både 2D och 3D med rumsmått och möblering. Spekulanten förstår planlösningen på sekunder – och annonsen ser mer genomarbetad ut.</p>
          <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer om planritningar →</span>
        </a>
      </div>
    </main>
  )
}