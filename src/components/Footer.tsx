'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const SocialIcons = {
  Instagram: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>),
  Facebook: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>),
  Twitter: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>),
  Youtube: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>),
};

const footerLinks = {
  church: [
    { label: 'About Harvesters FCT', href: '/about' },
    { label: 'Next Level Prayers', href: '/next-level-prayers' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ],
  getInvolved: [
    { label: 'Join a Community', href: '/communities' },
    { label: 'Join the Workforce', href: '/workforce' },
    { label: 'Partner With Us', href: '/partnership' },
    { label: 'Book Counselling', href: '/counselling' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'New Newsletter Subscription - Harvesters FCT',
          from_name: 'Harvesters FCT Website',
          email
        })
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };
  return (
    <footer style={{ background: '#071E3D', color: '#E2E8F0' }}>
      {/* Newsletter */}
      <div style={{ background: '#003B73', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-custom" style={{ padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Stay Updated
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>
                Get launch updates, prayer alerts, and community news from Harvesters FCT.
              </p>
            </div>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Enter your email" className="form-input"
                value={email} onChange={(e) => setEmail(e.target.value)} required
                style={{ width: '260px', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }} />
              <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ gap: '0.4rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'success' ? 'Subscribed!' : status === 'loading' ? 'Subscribing...' : 'Stay Connected'} <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <Image
                  src="/logo-white.png"
                  alt="Harvesters FCT"
                  width={180}
                  height={54}
                  style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
                />
              </Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              An upcoming campus of Harvesters International Christian Centre, coming to the FCT.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {([
                ['Instagram', SocialIcons.Instagram, 'https://www.instagram.com/harvesters.fct/'],
                ['Facebook', SocialIcons.Facebook, 'https://www.facebook.com/Harvesters.fct'],
                ['YouTube', SocialIcons.Youtube, 'https://www.youtube.com/@HarvestersTV'],
              ] as [string, () => React.ReactElement, string][]).map(([label, Icon, href]) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'all 0.25s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(215,25,32,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = '#D71920'; (e.currentTarget as HTMLElement).style.color = '#D71920'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* The Church */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '1.25rem' }}>The Church</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.church.map(l => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '1.25rem' }}>Get Involved</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.getInvolved.map(l => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '1.25rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: MapPin, text: 'Federal Capital Territory, Nigeria' },
                { icon: Phone, text: '+234 000 000 0000', href: 'tel:+2340000000000' },
                { icon: Mail, text: 'fct@harvestersng.org', href: 'mailto:fct@harvestersng.org' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                  <Icon size={15} style={{ color: '#D71920', marginTop: '3px', flexShrink: 0 }} />
                  {href ? <a href={href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{text}</a>
                    : <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{text}</span>}
                </div>
              ))}
              <a href="https://harvestersng.org" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: '#D71920', fontWeight: '700', textDecoration: 'none', marginTop: '0.5rem' }}>
                Harvesters International <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            © {year} Harvesters FCT. A campus of Harvesters International Christian Centre.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/contact" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
