import Link from "next/link"
import { visningar } from "../lib/visningar"

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Visningar</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Det vi har<br /><span style={{ color: '#3E5C50' }}>gjort hittills.</span></h1>
        <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>
          Klicka in och gå runt. Så här ser det ut för spekulanterna – ingen app, ingen inloggning.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {visningar.map((v) => (
          <article key={v.matterport} className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E2DFD6' }}>
            <div className="aspect-[4/3] md:aspect-video w-full" style={{ backgroundColor: '#F1EFE9' }}>
              <iframe
                src={v.matterport}
                title={v.titel}
                className="w-full h-full"
                allow="xr-spatial-tracking; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6" style={{ backgroundColor: '#F1EFE9' }}>
              <div>
                <h2 className="font-semibold text-lg">{v.titel}</h2>
                <p className="text-sm" style={{ color: '#56605A' }}>{v.beskrivning}</p>
              </div>
              <a href={v.matterport} target="_blank" rel="noopener noreferrer" className="text-sm font-medium whitespace-nowrap" style={{ color: '#3E5C50' }}>
                Öppna i helskärm ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 p-8 md:p-12 rounded-2xl" style={{ backgroundColor: '#3E5C50' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Vill du ha en sådan här?</h2>
        <p className="text-base mb-8" style={{ color: '#C5D1C8' }}>Vi skannar din bostad och levererar en färdig visning inom 48 timmar.</p>
        <Link href="/kontakt" className="inline-block px-6 py-3 rounded-full font-medium transition-colors" style={{ backgroundColor: '#C5D1C8', color: '#1E2521' }}>
          Boka en skanning →
        </Link>
      </div>
    </main>
  )
}
