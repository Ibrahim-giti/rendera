import Link from "next/link"
import { visningar } from "./lib/visningar"

export default function Page() {
  const utvald = visningar[0]

  return (
    <main style={{ backgroundColor: '#FAFAF7' }}>

      {/* Hero */}
      <section className="flex flex-col px-5 md:px-8 pt-20 md:pt-32 pb-16 md:pb-20 max-w-4xl mx-auto">
        <p className="text-xs md:text-sm tracking-widest uppercase mb-6" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>
          3D-visningar · Planritningar
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Visningen som <br />
          <span style={{ color: '#3E5C50' }}>aldrig stänger.</span>
        </h1>
        <p className="text-base md:text-lg mb-10 max-w-xl leading-relaxed" style={{ color: '#56605A' }}>
          Vi skannar bostäder i 3D åt mäklare, husbolag och privatpersoner. Ett besök av oss, sedan kan vem som helst gå på visning via en länk – i mobilen eller på datorn, dygnet runt.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Link href="/kontakt" className="px-6 py-3 rounded-full text-white font-medium transition-colors" style={{ backgroundColor: '#3E5C50' }}>
            Boka en skanning
          </Link>
          <a href="#visning" className="px-6 py-3 rounded-full font-medium border transition-colors" style={{ borderColor: '#E2DFD6', color: '#1E2521' }}>
            Testa en visning
          </a>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm" style={{ color: '#56605A' }}>
          <span><strong style={{ color: '#1E2521' }}>48 h</strong> leverans</span>
          <span><strong style={{ color: '#1E2521' }}>Ingen app</strong> behövs</span>
          <span><strong style={{ color: '#1E2521' }}>Vi kommer</strong> dit ni är</span>
        </div>
      </section>

      {/* Utvald visning */}
      {utvald && (
        <section id="visning" className="px-5 md:px-8 pb-20 md:pb-24 max-w-6xl mx-auto scroll-mt-24">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E2DFD6' }}>
            <div className="aspect-[4/3] md:aspect-video w-full" style={{ backgroundColor: '#F1EFE9' }}>
              <iframe
                src={utvald.matterport}
                title={utvald.titel}
                className="w-full h-full"
                allow="xr-spatial-tracking; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6" style={{ backgroundColor: '#F1EFE9' }}>
              <div>
                <h2 className="font-semibold text-lg">{utvald.titel}</h2>
                <p className="text-sm" style={{ color: '#56605A' }}>{utvald.beskrivning}</p>
              </div>
              <Link href="/visningar" className="text-sm font-medium whitespace-nowrap" style={{ color: '#3E5C50' }}>
                Alla visningar →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Tjänster */}
      <section className="py-20 md:py-24 px-5 md:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Tjänster</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Visa mer –<br /><span style={{ color: '#3E5C50' }}>innan första visningen.</span></h2>
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>Allt skannas på plats av oss och levereras färdigt att lägga in i annonsen, dela som länk eller skicka till spekulanter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/tjanster/360" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>⊕</div>
            <h3 className="text-xl font-semibold mb-3">Virtuell 3D-visning</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En klickbar 3D-visning av hela bostaden som öppnas direkt i webbläsaren – ingen app behövs.</p>
            <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer →</span>
          </Link>
          <Link href="/tjanster/planritning" className="p-8 rounded-2xl border hover:shadow-md transition-shadow" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ backgroundColor: '#EADFC7', color: '#6E5436' }}>⊞</div>
            <h3 className="text-xl font-semibold mb-3">3D-planritning</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#56605A' }}>En tydlig planritning i både 2D och 3D med rumsmått och möblering.</p>
            <span className="text-sm font-medium" style={{ color: '#3E5C50' }}>Läs mer →</span>
          </Link>
        </div>
      </section>

      {/* Hur det funkar */}
      <section className="py-20 md:py-24 px-5 md:px-8" style={{ backgroundColor: '#F1EFE9' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Hur det funkar</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Från bokning till<br /><span style={{ color: '#3E5C50' }}>publicering på 48 h.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>01</p>
              <h3 className="font-semibold text-lg mb-2">Boka</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Hör av dig via formuläret eller mejl. Vi bokar in en tid som passar.</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>02</p>
              <h3 className="font-semibold text-lg mb-2">Vi skannar</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Vi kommer till bostaden och skannar alla rum. Tar ca 1–2 timmar.</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-4" style={{ color: '#3E5C50' }}>03</p>
              <h3 className="font-semibold text-lg mb-2">Publicera</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#56605A' }}>Inom 48 h får du en färdig länk att lägga in i annonsen eller skicka till spekulanter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-20 md:py-24 px-5 md:px-8 max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Vanliga frågor</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Har du frågor?<br /><span style={{ color: '#3E5C50' }}>Vi har svar.</span></h2>
        </div>
        <div className="flex flex-col" style={{ borderTop: '1px solid #E2DFD6' }}>
          {[
            { q: "Hur lång tid tar skanningen?", a: "En vanlig lägenhet tar 1–2 timmar. Villor och större objekt kan ta 2–3 timmar." },
            { q: "Hur snabbt får jag den färdiga visningen?", a: "Inom 48 timmar efter skanningen levererar vi en färdig länk redo att publicera." },
            { q: "Fungerar det på mobil?", a: "Ja, visningen fungerar på alla enheter – mobil, surfplatta och dator – direkt i webbläsaren utan app." },
            { q: "Var finns ni?", a: "Vi kommer dit ni är. Hör av dig så löser vi resan." },
            { q: "Vad kostar det?", a: "Kontakta oss för prisuppgift – priset beror på objektets storlek och vilka tjänster ni väljer." },
          ].map((item, i) => (
            <details key={i} className="group" style={{ borderBottom: '1px solid #E2DFD6' }}>
              <summary className="flex justify-between items-center gap-4 py-5 cursor-pointer font-medium list-none">
                {item.q}
                <span className="text-2xl font-light transition-transform group-open:rotate-45" style={{ color: '#3E5C50' }}>+</span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed" style={{ color: '#56605A' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl" style={{ backgroundColor: '#3E5C50' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Redo att komma igång?</h2>
          <p className="text-base md:text-lg mb-8" style={{ color: '#C5D1C8' }}>Boka en skanning och få en färdig 3D-visning inom 48 timmar.</p>
          <Link href="/kontakt" className="inline-block px-6 py-3 rounded-full font-medium transition-colors" style={{ backgroundColor: '#C5D1C8', color: '#1E2521' }}>
            Boka en skanning →
          </Link>
        </div>
      </section>

    </main>
  )
}
