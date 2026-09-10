"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Mäklare",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("contacts").insert(form)

    if (!error) setSuccess(true)
    setLoading(false)
  }

  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <div className="mb-16">
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Kontakt</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6">Boka en<br /><span style={{ color: '#3E5C50' }}>fotografering.</span></h1>
        <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>
          Fyll i formuläret så återkommer vi inom 24 timmar med mer information och prisuppgift.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {success && <p className="text-sm p-4 rounded-xl" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>Tack! Vi återkommer inom 24 timmar.</p>}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Namn</label>
            <input
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }}
              placeholder="Ditt namn"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">E-post</label>
            <input
              type="email"
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }}
              placeholder="din@email.se"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Jag är</label>
            <select
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9', color: '#56605A' }}
              value={form.type}
              onChange={e => setForm({...form, type: e.target.value})}
            >
              <option>Mäklare</option>
              <option>Privatperson</option>
              <option>Annat</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Om objektet</label>
            <textarea
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }}
              rows={4}
              placeholder="Berätta om bostaden – typ, storlek, ort..."
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full text-white font-medium text-sm mt-2 transition-colors"
            style={{ backgroundColor: '#3E5C50' }}
            disabled={loading}
          >
            {loading ? "Skickar..." : "Skicka förfrågan →"}
          </button>
        </form>

        <div className="flex flex-col gap-8 pt-2">
          <div>
            <h3 className="font-semibold mb-2">Svarstid</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Vi svarar inom 24 timmar på vardagar.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Område</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Vi verkar i Gävle med omnejd. Kontakta oss för andra orter.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Leverans</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Färdig tour inom 48 timmar efter fotografering.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">E-post</h3>
            <a href="mailto:hej@rendera.se" className="text-sm" style={{ color: '#3E5C50' }}>ibraabakar@outlook.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}