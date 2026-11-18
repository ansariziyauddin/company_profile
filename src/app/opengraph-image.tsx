import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';
export const alt = 'Innovance Tech AI — Engineering Scalable AI & Digital Systems';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#1B0B3B',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#7C3AED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            IT
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              maxWidth: '950px',
              letterSpacing: '-0.03em',
            }}
          >
            Engineering Scalable{' '}
            <span style={{ color: '#A78BFA' }}>AI & Digital Systems</span>
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            14+ years of engineering excellence building web architectures, mobile apps,
            and AI-powered solutions.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '20px',
            color: '#A78BFA',
            fontWeight: 600,
          }}
        >
          <span>Web Applications</span>
          <span>•</span>
          <span>Mobile Apps</span>
          <span>•</span>
          <span>AI Solutions</span>
          <span>•</span>
          <span>inovancetech.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
