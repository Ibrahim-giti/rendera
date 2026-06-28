export default function Page() {
  return (
    <main style={{ backgroundColor: '#FAFAF7' }}>

      {/* Hero */}
      <section className="flex flex-col px-8 pt-32 pb-24 max-w-4xl mx-auto">
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>
          360°-visningar · Drönarfoto · 3D-planritningar
        </p>
        <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight">
          Visningen som <br />
          <span style={{ color: '#3E5C50' }}>aldrig stänger.</span>
        </h1>
        <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: '#56605A' }}>
          Vi fotograferar bostäder åt mäklare och privatpersoner – rundvandringar i 360°, drönarbilder från luften och planritningar i 3D. Ett besök av oss, sedan kan spekulanterna gå på visning hemifrån. Dygnet runt.
        </p>
        <div className="flex gap-4 mb-12">
          <a href="/kontakt" className="px-6 py-3 rounded-full text-white font-medium transition-colors" style={{ backgroundColor: '#3E5C50' }}>
            Boka fotografering
          </a>
          <a href="/tjanster" className="px-6 py-3 rounded-full font-medium border transition-colors" style={{ borderColor: '#E2DFD6', color: '#1E2521' }}>
            Utforska tjänsterna
          </a>
        </div>
        <div className="flex gap-8 text-sm" style={{ color: '#56605A' }}>
          <span><strong style={{ color: '#1E2521' }}>48 h</strong> leverans</span>
          <span><strong style={{ color: '#1E2521' }}>Gävle</strong> med omnejd</span>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Tjänster</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Tre sätt att visa mer –<br /><span style={{ color: '#3E5C50' }}>innan första visningen.</span></h2>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>Allt fotograferas på plats av oss och levereras färdigt att lägga in i annonsen, dela som länk eller skicka till spekulanter.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <a href="/tjanster/360" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>⊕</div>
            <h3 className="text-xl font-semibold mb-3">Virtuell rundvandring</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En klickbar 360°-visning av hela bostaden som öppnas direkt i webbläsaren – ingen app behövs.</p>
            <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer →</span>
          </a>
          <a href="/tjanster/dronare" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#EADFC7', color: '#6E5436' }}>✦</div>
            <h3 className="text-xl font-semibold mb-3">Drönarbilder</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>Flygfoton som visar läget, tomten och omgivningen – det markbilder aldrig kan.</p>
            <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer →</span>
          </a>
          <a href="/tjanster/planritning" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>⊞</div>
            <h3 className="text-xl font-semibold mb-3">3D-planritning</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En tydlig planritning i både 2D och 3D med rumsmått och möblering.</p>
            <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer →</span>
          </a>
        </div>
      </section>

      {/* Hur det funkar */}
      <section className="py-24 px-8" style={{ backgroundColor: '#F1EFE9' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Hur det funkar</p>
            <h2 className="text-4xl font-bold tracking-tight">Från bokning till<br /><span style={{ color: '#3E5C50' }}>publicering på 48h.</span></h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>01</p>
              <h3 className="font-semibold text-lg mb-2">Boka</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Fyll i formuläret eller ring oss. Vi bokar in en tid som passar dig.</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>02</p>
              <h3 className="font-semibold text-lg mb-2">Vi fotograferar</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Vi kommer till bostaden och fotograferar allt. Tar ca 1–2 timmar.</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>03</p>
              <h3 className="font-semibold text-lg mb-2">Publicera</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Inom 48h får du en färdig länk att lägga in i annonsen eller skicka till spekulanter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Vanliga frågor</p>
          <h2 className="text-4xl font-bold tracking-tight">Har du frågor?<br /><span style={{ color: '#3E5C50' }}>Vi har svar.</span></h2>
        </div>
        <div className="flex flex-col" style={{ borderTop: '1px solid #E2DFD6' }}>
          {[
            { q: "Hur lång tid tar fotograferingen?", a: "En vanlig lägenhet tar 1–2 timmar. Villor och större objekt kan ta 2–3 timmar." },
            { q: "Hur snabbt får jag den färdiga touren?", a: "Inom 48 timmar efter fotografering levererar vi en färdig länk redo att publicera." },
            { q: "Fungerar det på mobil?", a: "Ja, touren fungerar på alla enheter – mobil, surfplatta och dator – direkt i webbläsaren utan app." },
            { q: "Vilket område täcker ni?", a: "Vi verkar i Gävle med omnejd. Kontakta oss för andra orter så löser vi det." },
            { q: "Vad kostar det?", a: "Kontakta oss för prisuppgift – priset beror på objektets storlek och vilka tjänster ni väljer." },
          ].map((item, i) => (
            <details key={i} className="group" style={{ borderBottom: '1px solid #E2DFD6' }}>
              <summary className="flex justify-between items-center py-5 cursor-pointer font-medium list-none">
                {item.q}
                <span className="text-2xl font-light transition-transform group-open:rotate-45" style={{ color: '#3E5C50' }}>+</span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed" style={{ color: '#56605A' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto p-12 rounded-2xl" style={{ backgroundColor: '#3E5C50' }}>
          <h2 className="text-4xl font-bold text-white mb-4">Redo att komma igång?</h2>
          <p className="text-lg mb-8" style={{ color: '#C5D1C8' }}>Boka en fotografering idag och leverera en professionell 3D-visning inom 48 timmar.</p>
          <a href="/kontakt" className="inline-block px-6 py-3 rounded-full font-medium transition-colors" style={{ backgroundColor: '#C5D1C8', color: '#1E2521' }}>
            Boka fotografering →
          </a>
        </div>
      </section>

    </main>
  )
}