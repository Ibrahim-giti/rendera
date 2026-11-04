"use client"

import { useState } from "react"

// Byt adress här om ni skaffar en gemensam inkorg, t.ex. hej@rendera.se
const EPOST = "ibraabakar@outlook.com"

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Mäklare",
    message: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Förfrågan från ${form.name || "hemsidan"} (${form.type})`
    const body = [
      `Namn: ${form.name}`,
      `E-post: ${form.email}`,
      `Jag är: ${form.type}`,
      "",
      form.message,
    ].join("\n")
    window.location.href = `mailto:${EPOST}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldStyle = { borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }

  return (
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: '#3E5C50', fontFamily: 'monospace' }}>Kontakt</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Boka en<br /><span style={{ color: '#3E5C50' }}>skanning.</span></h1>
        <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: '#56605A' }}>
          Berätta kort om bostaden så återkommer vi inom 24 timmar med mer information och prisuppgift.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">Namn</label>
            <input
              id="name"
              required
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={fieldStyle}
              placeholder="Ditt namn"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">E-post</label>
            <input
              id="email"
              type="email"
              required
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={fieldStyle}
              placeholder="din@email.se"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-sm font-medium">Jag är</label>
            <select
              id="type"
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={{ ...fieldStyle, color: '#56605A' }}
              value={form.type}
              onChange={e => setForm({ ...form, type: e.target.value })}
            >
              <option>Mäklare</option>
              <option>Husbolag</option>
              <option>Hyresvärd</option>
              <option>Privatperson</option>
              <option>Annat</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium">Om objektet</label>
            <textarea
              id="message"
              className="border rounded-xl px-4 py-3 text-sm outline-none"
              style={fieldStyle}
              rows={4}
              placeholder="Berätta om bostaden – typ, storlek, ort..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full text-white font-medium text-sm mt-2 transition-colors"
            style={{ backgroundColor: '#3E5C50' }}
          >
            Skicka förfrågan →
          </button>
          <p className="text-xs" style={{ color: '#56605A' }}>Knappen öppnar ett färdigskrivet mejl i ditt mejlprogram.</p>
        </form>

        <div className="flex flex-col gap-8 pt-2">
          <div>
            <h3 className="font-semibold mb-2">E-post</h3>
            <a href={`mailto:${EPOST}`} className="text-sm break-all" style={{ color: '#3E5C50' }}>{EPOST}</a>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Svarstid</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Vi svarar inom 24 timmar på vardagar.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Var vi finns</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Vi kommer dit ni är.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Leverans</h3>
            <p className="text-sm" style={{ color: '#56605A' }}>Färdig visning inom 48 timmar efter skanningen.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
