"use client"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("fastigheter")
const [form, setForm] = useState({
  title: "",
  address: "",
  city: "",
  tour_url: "",
})
  const [success, setSuccess] = useState(false)
  const [contacts, setContacts] = useState([])
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push("/login")
      } else {
        setLoading(false)
        fetchContacts()
      }
    }
    checkUser()
  }, [])

  async function fetchContacts() {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false })
    if (data) setContacts(data)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from("properties").insert({
      title: form.title,
      address: form.address,
      city: form.city,
      tour_url: form.tour_url,
      price: 0,
      size_sqm: 0,
      rooms: 0,
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
    <main className="max-w-4xl mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <button onClick={handleLogout} className="text-sm transition-colors" style={{ color: '#56605A' }}>
          Logga ut
        </button>
      </div>

      <div className="flex gap-2 mb-8 border-b" style={{ borderColor: '#E2DFD6' }}>
        <button
          onClick={() => setActiveTab("fastigheter")}
          className="px-4 py-2 text-sm font-medium border-b-2 transition-colors"
          style={{ borderColor: activeTab === "fastigheter" ? '#3E5C50' : 'transparent', color: activeTab === "fastigheter" ? '#3E5C50' : '#56605A' }}
        >
          Lägg till fastighet
        </button>
        <button
          onClick={() => setActiveTab("kontakter")}
          className="px-4 py-2 text-sm font-medium border-b-2 transition-colors"
          style={{ borderColor: activeTab === "kontakter" ? '#3E5C50' : 'transparent', color: activeTab === "kontakter" ? '#3E5C50' : '#56605A' }}
        >
          Kontakter ({contacts.length})
        </button>
      </div>

      {activeTab === "fastigheter" && (
        <div className="max-w-2xl">
          {success && <p className="text-sm p-4 rounded-xl mb-4" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>Fastigheten lades till!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border rounded-xl px-4 py-3 text-sm outline-none" style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }} placeholder="Titel" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        <input className="border rounded-xl px-4 py-3 text-sm outline-none" style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }} placeholder="Adress" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        <input className="border rounded-xl px-4 py-3 text-sm outline-none" style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }} placeholder="Stad" value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
        <input className="border rounded-xl px-4 py-3 text-sm outline-none" style={{ borderColor: '#E2DFD6', backgroundColor: '#F1EFE9' }} placeholder="Matterport URL" value={form.tour_url} onChange={e => setForm({...form, tour_url: e.target.value})} />
        <button type="submit" className="px-6 py-3 rounded-full text-white font-medium text-sm" style={{ backgroundColor: '#3E5C50' }} disabled={loading}>
          {loading ? "Sparar..." : "Lägg till fastighet"}
        </button>
      </form>
        </div>
      )}

      {activeTab === "kontakter" && (
        <div className="flex flex-col gap-4">
          {contacts.length === 0 && <p className="text-sm" style={{ color: '#56605A' }}>Inga kontakter än.</p>}
          {contacts.map((c) => (
            <div key={c.id} className="p-6 rounded-2xl border" style={{ backgroundColor: '#F1EFE9', borderColor: '#E2DFD6' }}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <a href={`mailto:${c.email}`} className="text-sm" style={{ color: '#3E5C50' }}>{c.email}</a>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#D9E4DF', color: '#3E5C50' }}>{c.type}</p>
                  <p className="text-xs mt-1" style={{ color: '#56605A' }}>{new Date(c.created_at).toLocaleDateString("sv-SE")}</p>
                </div>
              </div>
              {c.message && <p className="text-sm" style={{ color: '#56605A' }}>{c.message}</p>}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}