import React from 'react';
import { Link } from 'wouter';

interface TahbanLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  asLink?: boolean;
}

export function TahbanLogo({ size = 'md', variant = 'default', asLink = false }: TahbanLogoProps) {
  // Sizes increased ~15% from original
  const sizes = {
    sm:  { emblem: 34, title: 16, sub: 6.5, gap: 9 },
    md:  { emblem: 46, title: 21, sub: 7.5, gap: 11 },
    lg:  { emblem: 62, title: 27, sub: 9.5, gap: 14 },
  };
  const s = sizes[size];
  const textColor = variant === 'white' ? '#ffffff' : '#0f244a';
  const subColor  = variant === 'white' ? 'rgba(255,255,255,0.65)' : '#6b7280';

  const Emblem = () => (
    <svg width={s.emblem} height={s.emblem} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#0f244a"/>
      <circle cx="22" cy="22" r="20.5" stroke="#d89b21" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="22" r="12.5" stroke="#d89b21" strokeWidth="0.65" opacity="0.4" fill="none"/>
      <ellipse cx="22" cy="22" rx="6.5" ry="12.5" stroke="#d89b21" strokeWidth="0.65" opacity="0.4" fill="none"/>
      <line x1="9.5" y1="22" x2="34.5" y2="22" stroke="#d89b21" strokeWidth="0.55" opacity="0.38"/>
      <line x1="11.5" y1="16.5" x2="32.5" y2="16.5" stroke="#d89b21" strokeWidth="0.45" opacity="0.28"/>
      <line x1="11.5" y1="27.5" x2="32.5" y2="27.5" stroke="#d89b21" strokeWidth="0.45" opacity="0.28"/>
      <path d="M 11 31 Q 19 4 34 13" stroke="#d89b21" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
      <g transform="translate(32.8,10.6) rotate(-32)">
        <polygon points="0,-3.8 2,1.8 0,0.4 -2,1.8" fill="#d89b21"/>
        <rect x="-3.2" y="0.8" width="6.4" height="1.1" rx="0.5" fill="#d89b21" opacity="0.9"/>
        <rect x="-1.7" y="2.1" width="3.4" height="0.8" rx="0.3" fill="#d89b21" opacity="0.7"/>
      </g>
    </svg>
  );

  const Wordmark = () => (
    <div>
      <div style={{
        fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
        fontSize: s.title,
        fontWeight: 700,
        color: textColor,
        lineHeight: 1.05,
        letterSpacing: '0.1em',
      }}>
        TTEC
      </div>
      <div style={{
        fontSize: s.sub,
        color: subColor,
        letterSpacing: '0.12em',
        fontWeight: 500,
        marginTop: 3,
        lineHeight: 1.25,
        whiteSpace: 'nowrap',
      }}>
        Tahban Travel &amp; Education
      </div>
    </div>
  );

  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: s.gap }}>
      <Emblem />
      <Wordmark />
    </div>
  );

  if (asLink) {
    return <Link href="/" className="block">{content}</Link>;
  }
  return content;
}
