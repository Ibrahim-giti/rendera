"use client"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    title: "",
    address: "",
    city: "",
    price: "",
    size_sqm: "",
    rooms: "",
    description: "",
    tour_url: "",
  })
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push("/login")
      } else {
        setLoading(false)
      }
    }
    checkUser()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from("properties").insert({
      ...form,
      price: parseInt(form.price),
      size_sqm: parseInt(form.size_sqm),
      rooms: parseInt(form.rooms),
    })
    if (!error) setSuccess(true)
    setLoading(false)
  }

  async function handleLogout() {
  await supabase.auth.signOut()
  router.push("/login")
}

  if (loading) return null

  return (
    <main className="max-w-2xl mx-auto px-8 py-12">
 <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold">Lägg till fastighet</h1>
    <button
      onClick={handleLogout}
      className="text-sm text-gray-400 hover:text-black transition-colors"
    >
      Logga ut
    </button>
  </div>
      <h1 className="text-3xl font-bold mb-8">Lägg till fastighet</h1>

      {success && <p className="text-green-600 mb-4">Fastigheten lades till!</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border rounded-lg px-4 py-2" placeholder="Titel" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Adress" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Stad" value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Pris" type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Storlek (m²)" type="number" value={form.size_sqm} onChange={e => setForm({...form, size_sqm: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Antal rum" type="number" value={form.rooms} onChange={e => setForm({...form, rooms: e.target.value})} />
        <textarea className="border rounded-lg px-4 py-2" placeholder="Beskrivning" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <input className="border rounded-lg px-4 py-2" placeholder="Matterport URL" value={form.tour_url} onChange={e => setForm({...form, tour_url: e.target.value})} />
        <button type="submit" className="bg-black text-white py-3 rounded-lg hover:bg-gray-800" disabled={loading}>
          {loading ? "Sparar..." : "Lägg till"}
        </button>
      </form>
    </main>
  )
}