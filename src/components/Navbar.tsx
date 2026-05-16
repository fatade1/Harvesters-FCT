'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Communities', href: '/communities' },
  { label: 'NLP', href: '/next-level-prayers' },
  { label: 'Giving', href: '/giving' },
  { label: 'Counselling', href: '/counselling' },
  { label: 'Workforce', href: '/workforce' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${scrolled ? '#DDE3EA' : 'rgba(221,227,234,0.5)'}`,
      boxShadow: scrolled ? '0 2px 20px rgba(7,30,61,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo-black.png"
              alt="Harvesters FCT"
              width={180}
              height={54}
              style={{ objectFit: 'contain', height: '44px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                padding: '0.4rem 0.65rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: '600',
                color: pathname === link.href ? '#D71920' : '#071E3D',
                textDecoration: 'none',
                background: pathname === link.href ? '#FFF0F1' : 'transparent',
                transition: 'all 0.2s ease',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={e => {
                if (pathname !== link.href) {
                  (e.currentTarget as HTMLElement).style.color = '#D71920';
                  (e.currentTarget as HTMLElement).style.background = '#FFF0F1';
                }
              }}
              onMouseLeave={e => {
                if (pathname !== link.href) {
                  (e.currentTarget as HTMLElement).style.color = '#071E3D';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', gap: '0.625rem' }} className="desktop-nav">
            <Link href="/communities" className="btn-primary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.8rem' }}>
              Join Community
            </Link>
            <Link href="/giving" className="btn-blue" style={{ padding: '0.6rem 1.1rem', fontSize: '0.8rem' }}>
              Give
            </Link>
          </div>

          {/* Mobile Burger */}
          <button onClick={() => setIsOpen(!isOpen)} style={{
            background: '#F5F7FA', border: '1px solid #DDE3EA', borderRadius: '10px',
            padding: '0.5rem', cursor: 'pointer', color: '#071E3D', display: 'none',
          }} className="mobile-burger" aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ borderTop: '1px solid #DDE3EA', paddingBottom: '1rem', animation: 'fadeInUp 0.25s ease-out' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', paddingTop: '0.75rem' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  padding: '0.75rem 1rem', borderRadius: '10px',
                  color: pathname === link.href ? '#D71920' : '#071E3D',
                  fontWeight: '600', fontSize: '0.9rem',
                  textDecoration: 'none',
                  background: pathname === link.href ? '#FFF0F1' : 'transparent',
                }}>
                  {link.label}
                </Link>
              ))}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', padding: '0 0.5rem' }}>
                <Link href="/communities" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem', padding: '0.75rem' }}>
                  Join Community
                </Link>
                <Link href="/giving" className="btn-blue" style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem', padding: '0.75rem' }}>
                  Give
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1100px) { .desktop-nav { display: none !important; } .mobile-burger { display: flex !important; } }
        @media (min-width: 1101px) { .mobile-burger { display: none !important; } }
      `}</style>
    </nav>
  );
}
