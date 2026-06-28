"use client"

import { useState } from "react"

export default function PlanritningDemo() {
  const [is3D, setIs3D] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden mb-16 p-8" style={{ backgroundColor: '#F1EFE9' }}>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setIs3D(false)}
          className="px-4 py-2 text-sm rounded-full font-medium transition-all"
          style={{
            backgroundColor: !is3D ? '#3E5C50' : 'transparent',
            color: !is3D ? 'white' : '#56605A',
            border: '1px solid #E2DFD6'
          }}
        >
          2D
        </button>
        <button
          onClick={() => setIs3D(true)}
          className="px-4 py-2 text-sm rounded-full font-medium transition-all"
          style={{
            backgroundColor: is3D ? '#3E5C50' : 'transparent',
            color: is3D ? 'white' : '#56605A',
            border: '1px solid #E2DFD6'
          }}
        >
          3D
        </button>
      </div>

      <div style={{ perspective: '1000px' }}>
        <div
          style={{
            transition: 'transform 0.9s cubic-bezier(.22,.9,.3,1)',
            transform: is3D ? 'rotateX(52deg) rotateZ(-30deg) scale(0.9)' : 'none',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ filter: is3D ? 'drop-shadow(0 20px 20px rgba(30,37,33,0.3))' : 'none', transition: 'filter 0.9s' }}>
            {/* Golv */}
            <rect x="20" y="20" width="460" height="340" fill="#E9E6DE" stroke="#3E5C50" strokeWidth="3"/>

            {/* Vardagsrum */}
            <rect x="20" y="20" width="260" height="200" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="100" y="125" textAnchor="middle" fontSize="12" fill="#56605A" fontFamily="sans-serif">Vardagsrum</text>
            <text x="100" y="140" textAnchor="middle" fontSize="10" fill="#3E5C50" fontFamily="sans-serif">28 m²</text>

            {/* Sovrum */}
            <rect x="280" y="20" width="200" height="180" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="380" y="115" textAnchor="middle" fontSize="12" fill="#56605A" fontFamily="sans-serif">Sovrum</text>
            <text x="380" y="130" textAnchor="middle" fontSize="10" fill="#3E5C50" fontFamily="sans-serif">16 m²</text>

            {/* Kök */}
            <rect x="20" y="220" width="160" height="140" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="100" y="295" textAnchor="middle" fontSize="12" fill="#56605A" fontFamily="sans-serif">Kök</text>
            <text x="100" y="310" textAnchor="middle" fontSize="10" fill="#3E5C50" fontFamily="sans-serif">12 m²</text>

            {/* Badrum */}
            <rect x="180" y="220" width="100" height="80" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="230" y="265" textAnchor="middle" fontSize="11" fill="#56605A" fontFamily="sans-serif">Bad</text>

            {/* Hall */}
            <rect x="180" y="300" width="300" height="60" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="330" y="335" textAnchor="middle" fontSize="12" fill="#56605A" fontFamily="sans-serif">Hall</text>

            {/* Förråd */}
            <rect x="280" y="200" width="200" height="100" fill="#F1EFE9" stroke="#3E5C50" strokeWidth="2"/>
            <text x="380" y="255" textAnchor="middle" fontSize="12" fill="#56605A" fontFamily="sans-serif">Kontor</text>
            <text x="380" y="270" textAnchor="middle" fontSize="10" fill="#3E5C50" fontFamily="sans-serif">10 m²</text>

            {/* Dörrar */}
            <line x1="120" y1="220" x2="160" y2="220" stroke="#E9E6DE" strokeWidth="3"/>
            <line x1="280" y1="120" x2="280" y2="160" stroke="#E9E6DE" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    </div>
  )
}