'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Metadata handled in layout — page is client component due to event handlers

const values = [
  { letter: 'P', title: 'Pioneering Spirit', desc: 'We are not afraid to step into new territories for the propagation of the Gospel.' },
  { letter: 'I', title: 'Impassionate', desc: 'We live with passion for God, purpose, people, and community.' },
  { letter: 'L', title: 'Learning', desc: 'We are committed to growth, discovery, knowledge, and becoming better.' },
  { letter: 'L', title: 'Loyal', desc: 'We represent Christ faithfully to our community and world.' },
  { letter: 'A', title: 'Audacious', desc: 'We believe there is more, and we are bold enough to step into it.' },
  { letter: 'R', title: 'Refined', desc: 'We are shaped by grace, excellence, righteousness, and a passion for God.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>About</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            About Harvesters FCT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
            An upcoming campus of Harvesters International Christian Centre — bringing transformation, community, and spiritual growth to the FCT.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>What is Harvesters FCT?</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                Harvesters FCT is an upcoming campus of Harvesters International Christian Centre, created to bring the Harvesters experience of worship, community, transformation, prayer, and spiritual growth to the Federal Capital Territory.
              </p>
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                We are building a church family where people can encounter God, grow spiritually, build meaningful relationships, serve with their gifts, and become all God has called them to be.
              </p>
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', fontSize: '0.975rem' }}>
                The Harvesters dream began on December 13, 2003, through a divine vision given to Pastor Bolaji Idowu. That vision is now reaching the FCT.
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(0,59,115,0.12)' }}>
              <Image src="/hero_worship.png" alt="Harvesters FCT" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '6rem 1.5rem', background: '#003B73' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[{
              label: 'Our Vision', title: 'Thriving Churches in Key Cities',
              desc: 'To see lives changed by pioneering thriving churches in key cities — bringing hope, connecting people to God, influencing culture, and leading people to become fully devoted followers of Christ.',
            }, {
              label: 'Our Mission', title: 'Encounter. Grow. Serve. Transform.',
              desc: 'To build a church where people can encounter God, grow spiritually, do life together in community, serve with their gifts, and be transformed into all God has called them to be.',
            }].map(item => (
              <div key={item.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '0.75rem' }}>{item.label}</span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.35rem', color: '#FFFFFF', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.25' }}>{item.title}</h3>
                <div className="red-divider" />
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', marginTop: '1rem', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Our Culture</span>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {values.map(v => (
              <div key={v.title} className="card">
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF0F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#D71920' }}>{v.letter}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.5rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5F6B7A', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet Our Pastors</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[{
              name: 'Pastor Bolaji Idowu',
              title: 'Global Lead Pastor, Harvesters International Christian Centre',
              img: '/pastor_preaching.png',
              instagram: 'https://www.instagram.com/bolajiid/',
              instagramHandle: '@bolajiid',
              bio: 'Pastor Bolaji Idowu is the Global Lead Pastor of Harvesters International Christian Centre. He leads the global vision of the church, raising a movement of people who are passionate about God, transformed by the Word, and committed to changing lives across cities and nations. The Harvesters dream began through a divine vision given to him on December 13, 2003.',
            }, {
              name: 'Pastor Lanre Ajala',
              title: 'Sub-Group Pastor & Campus Pastor, Harvesters FCT',
              img: '/community_group.png',
              instagram: 'https://www.instagram.com/olanrewajuajala/',
              instagramHandle: '@olanrewajuajala',
              bio: 'Pastor Lanre Ajala is the Campus Pastor of Harvesters FCT. He leads the vision, culture, and spiritual direction of the upcoming FCT campus as the church prepares to launch. He is passionate about building a Christ-centered community where people can encounter God, grow spiritually, and become all God has called them to be.',
            }].map(p => (
              <div key={p.name} style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', border: '1px solid #DDE3EA', boxShadow: '0 4px 24px rgba(7,30,61,0.06)' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                  <Image src={p.img} alt={p.name} fill unoptimized style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,30,61,0.8), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
                    <div style={{ width: '32px', height: '3px', background: '#D71920', borderRadius: '2px' }} />
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.2rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.25rem' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: '#003B73', fontWeight: '700', letterSpacing: '0.03em', marginBottom: '1rem' }}>{p.title}</p>
                  <div className="red-divider" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontSize: '0.875rem', color: '#5F6B7A', lineHeight: '1.8', marginBottom: '1.25rem' }}>{p.bio}</p>
                  {/* Instagram link */}
                  <a
                    href={p.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#5F6B7A', fontSize: '0.85rem', fontWeight: '600', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D71920'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#5F6B7A'}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '8px', background: '#FFF0F1', border: '1px solid #FFC5C7' }}>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#D71920"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </span>
                    {p.instagramHandle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', background: '#EAF4FF', textAlign: 'center' }}>
        <div className="container-custom">
          <h2 className="section-title" style={{ color: '#003B73', marginBottom: '1rem' }}>Be Part of the Harvesters FCT Story</h2>
          <p style={{ color: '#5F6B7A', margin: '0 auto 2.5rem', maxWidth: '480px' }}>Your journey with Harvesters FCT can start today — before the official launch.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/communities" className="btn-primary">Join the Community <ArrowRight size={15} /></Link>
            <Link href="/partnership" className="btn-secondary">Partner With Us</Link>
            <Link href="/workforce" className="btn-secondary">Join the Workforce</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
