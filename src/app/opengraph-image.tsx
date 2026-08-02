import { ImageResponse } from 'next/og'

export const alt = 'Biodiversity.ae — UAE Nature Finance Intelligence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0d2b45 0%, #061a2a 100%)',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            fontWeight: 700,
            marginBottom: 'auto',
          }}
        >
          Biodiversity.ae
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          UAE Nature Finance Intelligence
        </div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.35)' }}>
          biodiversity.ae
        </div>
      </div>
    ),
    size,
  )
}
