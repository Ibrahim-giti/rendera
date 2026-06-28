import PlanritningDemo from "../../components/PlanritningDemo"

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <div className="mb-4">
        <a href="/tjanster" className="text-sm transition-colors" style={{ color: '#3E5C50' }}>← Tillbaka till tjänster</a>
      </div>

      <p className="text-sm tracking-widest uppercase mb-4 mt-8" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>3D · Planlösning</p>
      <h1 className="text-5xl font-bold tracking-tight mb-6">3D-plan-<br /><span style={{ color: '#3E5C50' }}>ritning.</span></h1>
      <p className="text-lg max-w-xl leading-relaxed mb-16" style={{ color: '#56605A' }}>
        En tydlig planritning i både 2D och 3D med rumsmått och möblering. Spekulanten förstår planlösningen på sekunder – och annonsen ser mer genomarbetad ut.
      </p>

   <PlanritningDemo />

      <div className="grid grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="font-semibold text-lg mb-3">Vad ingår</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Uppmätning på plats</li>
            <li>✓ 2D och 3D-version</li>
            <li>✓ Rumsmått och möblering</li>
            <li>✓ Klar inom 48h</li>
            <li>✓ Redo för Hemnet och Booli</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Passar för</h3>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#56605A' }}>
            <li>✓ Lägenheter</li>
            <li>✓ Villor</li>
            <li>✓ Fritidshus</li>
            <li>✓ Alla bostadstyper</li>
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