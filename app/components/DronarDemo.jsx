"use client"

import { useState } from "react"

export default function DronareDemo() {
  const [showHus, setShowHus] = useState(true)
  const [showTomt, setShowTomt] = useState(true)
  const [showSkog, setShowSkog] = useState(true)

  return (
    <div className="rounded-2xl overflow-hidden mb-16" style={{ backgroundColor: '#F1EFE9', position: 'relative' }}>
      
      {/* Lager-knappar */}
      <div className="flex gap-2 p-4" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <button
          onClick={() => setShowHus(!showHus)}
          className="px-3 py-1 text-xs rounded-full font-medium transition-all"
          style={{
            backgroundColor: showHus ? '#3E5C50' : 'rgba(255,255,255,0.6)',
            color: showHus ? 'white' : '#56605A',
            border: '1px solid #E2DFD6'
          }}
        >
          Hus
        </button>
        <button
          onClick={() => setShowTomt(!showTomt)}
          className="px-3 py-1 text-xs rounded-full font-medium transition-all"
          style={{
            backgroundColor: showTomt ? '#3E5C50' : 'rgba(255,255,255,0.6)',
            color: showTomt ? 'white' : '#56605A',
            border: '1px solid #E2DFD6'
          }}
        >
          Tomt
        </button>
        <button
          onClick={() => setShowSkog(!showSkog)}
          className="px-3 py-1 text-xs rounded-full font-medium transition-all"
          style={{
            backgroundColor: showSkog ? '#3E5C50' : 'rgba(255,255,255,0.6)',
            color: showSkog ? 'white' : '#56605A',
            border: '1px solid #E2DFD6'
          }}
        >
          Skog
        </button>
      </div>

      {/* Flygbild SVG */}
      <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
        
        {/* Bakgrund – mark */}
        <rect width="600" height="400" fill="#8B9D6A"/>

        {/* Väg */}
        <rect x="250" y="0" width="40" height="400" fill="#9E9E8A" opacity="0.8"/>
        <line x1="270" y1="0" x2="270" y2="400" stroke="white" strokeWidth="2" strokeDasharray="20 15" opacity="0.5"/>

        {/* Tomt */}
        <rect
          x="60" y="80" width="180" height="220"
          fill="#A8B87A"
          opacity={showTomt ? 1 : 0}
          style={{ transition: 'opacity 0.4s' }}
        />
        <rect
          x="60" y="80" width="180" height="220"
          fill="none" stroke="#6B8C4A" strokeWidth="2" strokeDasharray="6 4"
          opacity={showTomt ? 1 : 0}
          style={{ transition: 'opacity 0.4s' }}
        />
        <text x="150" y="310" textAnchor="middle" fontSize="10" fill="#3E5C50" fontFamily="sans-serif"
          opacity={showTomt ? 1 : 0} style={{ transition: 'opacity 0.4s' }}>
          845 m²
        </text>

        {/* Hus */}
        <g opacity={showHus ? 1 : 0} style={{ transition: 'opacity 0.4s' }}>
          {/* Husgrund */}
          <rect x="90" y="130" width="120" height="90" fill="#E8D5B0" stroke="#B8A070" strokeWidth="1.5"/>
          {/* Tak */}
          <polygon points="90,130 150,95 210,130" fill="#8B6050" opacity="0.9"/>
          {/* Fönster */}
          <rect x="105" y="150" width="25" height="20" fill="#C8DDE8" stroke="#8090A0" strokeWidth="1"/>
          <rect x="170" y="150" width="25" height="20" fill="#C8DDE8" stroke="#8090A0" strokeWidth="1"/>
          {/* Dörr */}
          <rect x="138" y="185" width="24" height="35" fill="#7A5040" rx="2"/>
          {/* Skugga */}
          <ellipse cx="155" cy="225" rx="55" ry="8" fill="rgba(0,0,0,0.15)"/>
          {/* Pool/altan */}
          <rect x="90" y="230" width="50" height="35" fill="#9CC8D8" opacity="0.8" rx="4"/>
        </g>

        {/* Skog */}
        <g opacity={showSkog ? 1 : 0} style={{ transition: 'opacity 0.4s' }}>
          {[
            [320, 60], [360, 40], [400, 70], [440, 50], [480, 65],
            [520, 45], [550, 70], [330, 110], [370, 90], [410, 115],
            [450, 95], [490, 120], [530, 100], [560, 115],
            [320, 160], [355, 140], [390, 165], [425, 145], [460, 170],
            [495, 150], [525, 165], [555, 145],
            [315, 210], [350, 195], [385, 215], [420, 200], [455, 220],
            [490, 205], [520, 215], [550, 200],
            [320, 260], [360, 245], [395, 265], [430, 250], [465, 270],
            [500, 255], [530, 265],
            [330, 310], [365, 295], [400, 315], [435, 300], [465, 320],
            [495, 305], [525, 315], [555, 300],
            [315, 355], [350, 340], [385, 360], [420, 345], [455, 365],
            [490, 350], [520, 360]
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x},${y})`}>
              <ellipse cx="0" cy="4" rx="10" ry="4" fill="rgba(0,0,0,0.2)"/>
              <polygon points="0,-18 -10,0 10,0" fill="#2D5A3D"/>
              <polygon points="0,-12 -8,4 8,4" fill="#3A7048"/>
            </g>
          ))}
        </g>

        {/* Drönare */}
        <g style={{ animation: 'droneFly 18s linear infinite' }}>
          <g style={{ animation: 'droneBob 3s ease-in-out infinite' }}>
            {/* Skugga */}
            <ellipse cx="0" cy="30" rx="12" ry="4" fill="rgba(0,0,0,0.2)" style={{ animation: 'shadowBob 3s ease-in-out infinite' }}/>
            {/* Kropp */}
            <rect x="-8" y="-5" width="16" height="10" rx="3" fill="#2C2C2C"/>
            {/* Kamera */}
            <circle cx="0" cy="6" r="4" fill="#1A1A1A"/>
            <circle cx="0" cy="6" r="2" fill="#4A90D9" opacity="0.8"/>
            {/* Armar */}
            <line x1="-8" y1="-3" x2="-18" y2="-10" stroke="#444" strokeWidth="2"/>
            <line x1="8" y1="-3" x2="18" y2="-10" stroke="#444" strokeWidth="2"/>
            <line x1="-8" y1="3" x2="-18" y2="10" stroke="#444" strokeWidth="2"/>
            <line x1="8" y1="3" x2="18" y2="10" stroke="#444" strokeWidth="2"/>
            {/* Propellrar */}
            <ellipse cx="-18" cy="-10" rx="8" ry="2" fill="#555" opacity="0.6" style={{ animation: 'spin 0.1s linear infinite' }}/>
            <ellipse cx="18" cy="-10" rx="8" ry="2" fill="#555" opacity="0.6" style={{ animation: 'spin 0.1s linear infinite' }}/>
            <ellipse cx="-18" cy="10" rx="8" ry="2" fill="#555" opacity="0.6" style={{ animation: 'spin 0.1s linear infinite' }}/>
            <ellipse cx="18" cy="10" rx="8" ry="2" fill="#555" opacity="0.6" style={{ animation: 'spin 0.1s linear infinite' }}/>
          </g>
        </g>

        {/* Etikett */}
        <rect x="8" y="370" width="130" height="22" rx="4" fill="rgba(0,0,0,0.4)"/>
        <text x="16" y="385" fontSize="11" fill="white" fontFamily="sans-serif">Drönarfoto · Gävle</text>
      </svg>

      <style>{`
        @keyframes droneFly {
          0%   { transform: translate(150px, 170px); }
          20%  { transform: translate(350px, 100px); }
          40%  { transform: translate(480px, 200px); }
          60%  { transform: translate(400px, 320px); }
          80%  { transform: translate(200px, 280px); }
          100% { transform: translate(150px, 170px); }
        }
        @keyframes droneBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes shadowBob {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50%       { transform: scale(0.85); opacity: 0.12; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}