import Link from "next/link"
import { visningar } from "../../lib/visningar"

export default function Page() {
  const exempel = visningar[0]

  return (
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-4">
        <Link href="/tjanster" className="text-sm transition-colors" style={{ color: '#3E5C50' }}>← Tillbaka till tjänster</Link>
      </div>

      <p className="text-sm tracking-widest uppercase mb-4 mt-8" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>3D · Webbaserad</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Virtuell<br /><span style={{ color: '#3E5C50' }}>3D-visning.</span></h1>
      <p className="text-base md:text-lg max-w-xl leading-relaxed mb-12 md:mb-16" style={{ color: '#56605A' }}>
        En klickbar 3D-visning av hela bostaden som öppnas direkt i webbläsaren – ingen app behövs. Besökaren rör sig fritt mellan rummen, ser bostaden i dockhusvy och kan mäta rummen själv.
      </p>

      {exempel && (
        <div className="rounded-2xl overflow-hidden mb-12 md:mb-16 aspect-[4/3] md:aspect-video" style={{ backgroundColor: '#F1EFE9' }}>
          <iframe
            src={exempel.matterport}
            title={exempel.titel}
            className="w-full h-full"
            allow="xr-spatial-tracking; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="font-semibold text-lg mb-3">Vad ingår</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Skanning på plats</li>
            <li>✓ Färdig 3D-visning inom 48 h</li>
            <li>✓ Delbar länk + embed-kod</li>
            <li>✓ Fungerar på mobil och dator</li>
            <li>✓ Ingen app behövs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Passar för</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Mäklare och bostäder till salu</li>
            <li>✓ Husbolag och visningshus</li>
            <li>✓ Hyresvärdar</li>
            <li>✓ Privatpersoner som vill spara ett minne av sitt hem</li>
          </ul>
        </div>
      </div>

      <div className="p-8 rounded-2xl" style={{ backgroundColor: '#3E5C50' }}>
        <h3 className="text-xl font-semibold text-white mb-2">Intresserad?</h3>
        <p className="text-sm mb-6" style={{ color: '#C5D1C8' }}>Vi återkommer inom 24 timmar med mer information och prisuppgift.</p>
        <Link href="/kontakt" className="inline-block px-6 py-3 rounded-full font-medium text-sm transition-colors" style={{ backgroundColor: '#C5D1C8', color: '#1E2521' }}>
          Boka en skanning →
        </Link>
      </div>
    </main>
  )
}
