'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Briefcase, Clock, MapPin, ChevronDown } from 'lucide-react';

const communities = [
  { name: 'Young Professionals Network', desc: 'Building careers and faith together', icon: '💼' },
  { name: 'Tech & Innovation Faith Group', desc: 'Faith meets the future of technology', icon: '💻' },
  { name: 'Family & Marriage Enrichment', desc: 'Building strong homes in faith', icon: '🏠' },
  { name: 'Worship & Prayer Group', desc: 'A heart for God through prayer', icon: '🙏' },
  { name: 'Business & Marketplace Faith', desc: 'Faith-driven entrepreneurship', icon: '📈' },
  { name: 'Bible Study Group', desc: 'Digging deeper into scripture', icon: '📖' },
];

const values = [
  { letter: 'P', title: 'Pioneering Spirit', desc: 'Stepping into new territories for the Gospel.' },
  { letter: 'I', title: 'Impassionate', desc: 'Passion for God, purpose, and people.' },
  { letter: 'L', title: 'Learning', desc: 'Committed to growth and becoming better.' },
  { letter: 'L', title: 'Loyal', desc: 'Faithfully representing Christ to the world.' },
  { letter: 'A', title: 'Audacious', desc: 'Bold enough to step into the more.' },
  { letter: 'R', title: 'Refined', desc: 'Shaped by grace, excellence, and righteousness.' },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/hero_worship.png" alt="Harvesters FCT Worship" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(7,30,61,0.93) 0%, rgba(0,59,115,0.82) 55%, rgba(7,30,61,0.70) 100%)' }} />
          {/* Red glow accent */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(215,25,32,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        </div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, padding: '7rem 1.5rem 5rem' }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(215,25,32,0.15)', border: '1px solid rgba(215,25,32,0.4)', borderRadius: '100px', padding: '0.375rem 1rem', marginBottom: '2rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D71920', display: 'block', animation: 'pulse-red 2s infinite' }} />
              <span style={{ fontSize: '0.72rem', color: '#FF6B6B', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Coming Soon to FCT</span>
            </div>

            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.08', marginBottom: '1.5rem' }}>
              Belong. Grow. Serve.<br />
              <span style={{ color: '#D71920' }}>Encounter God.</span>
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.78)', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '520px' }}>
              Harvesters FCT is an upcoming campus of Harvesters International Christian Centre — created to build a vibrant community of people who love God, grow spiritually, do life together, and serve with purpose.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '3rem' }}>
              <Link href="/communities" className="btn-primary" style={{ fontSize: '0.925rem' }}>
                Join the Community <ArrowRight size={16} />
              </Link>
              <Link href="/partnership" className="btn-white-outline" style={{ fontSize: '0.925rem' }}>
                Partner With Us
              </Link>
              <Link href="/workforce" className="btn-white-outline" style={{ fontSize: '0.925rem' }}>
                Join the Workforce
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
              {[['13+', 'Communities'], ['15', 'Departments'], ['8', 'Partnership Types']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#D71920', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{v}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: '600' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#about" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.45)', animation: 'float 2.5s ease-in-out infinite', zIndex: 2 }}>
          <ChevronDown size={30} />
        </a>
      </section>

      {/* ── PRE-LAUNCH BANNER ── */}
      <section style={{ background: '#D71920', padding: '1.1rem 1.5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF' }}>
            🎉 Harvesters FCT is preparing for launch —{' '}
            <Link href="/communities" style={{ textDecoration: 'underline', color: '#FFFFFF', fontWeight: '800' }}>Join a community</Link>,{' '}
            <Link href="/workforce" style={{ textDecoration: 'underline', color: '#FFFFFF', fontWeight: '800' }}>serve on the team</Link>, or{' '}
            <Link href="/partnership" style={{ textDecoration: 'underline', color: '#FFFFFF', fontWeight: '800' }}>partner with the vision</Link>.
          </p>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section id="about" style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">About Us</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Something Powerful<br />is Coming to FCT</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                Harvesters FCT is part of the Harvesters International Christian Centre family — created to bring the Harvesters experience of worship, prayer, community, growth, purpose, and transformation to the Federal Capital Territory.
              </p>
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginBottom: '2rem', fontSize: '0.975rem' }}>
                The Harvesters dream began on December 13, 2003, through a divine vision given to Pastor Bolaji Idowu. Now, that vision is reaching the FCT.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(0,59,115,0.15)' }}>
                <Image src="/pastor_preaching.png" alt="Harvesters ministry" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', background: '#D71920', borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founded</div>
                <div style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: '800', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>2003</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)' }}>Harvesters International</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 CTA CARDS ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Take Your Next Step</span>
            <h2 className="section-title">Be Part of Harvesters FCT<br />From the Beginning</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: Users, label: 'Join a Community', color: '#003B73', bg: '#EAF4FF', desc: 'Find people to do life with, grow with, pray with, and connect with before launch.', href: '/communities', cta: 'Explore Communities' },
              { icon: Heart, label: 'Partner With Us', color: '#D71920', bg: '#FFF0F1', desc: 'Support the vision through giving, resources, skills, prayer, or collaboration.', href: '/partnership', cta: 'Become a Partner' },
              { icon: Briefcase, label: 'Join the Workforce', color: '#003B73', bg: '#EAF4FF', desc: 'Be part of the launch team helping to build this new campus from the ground up.', href: '/workforce', cta: 'Join the Launch Team' },
            ].map(({ icon: Icon, label, color, bg, desc, href, cta }) => (
              <div key={label} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <Icon size={26} style={{ color }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{label}</h3>
                <p style={{ color: '#5F6B7A', fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>{desc}</p>
                <Link href={href} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE INFO ── */}
      <section style={{ background: '#003B73', padding: '5rem 1.5rem' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6B6B', marginBottom: '0.75rem' }}>Service Times</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>Join Us When We Launch</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { label: 'Sunday Service', value: 'Coming Soon', icon: Clock },
              { label: 'Midweek Service', value: 'Coming Soon', icon: Clock },
              { label: 'Launch Date', value: 'To Be Announced', icon: Clock },
              { label: 'Location', value: 'FCT, Nigeria', icon: MapPin },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}>
                <Icon size={22} style={{ color: '#D71920', marginBottom: '0.75rem' }} />
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: '700', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn-primary">Stay Updated <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES PREVIEW ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Communities</span>
            <h2 className="section-title">Find Your People</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Small groups where you can do life together with people who will love, care, and challenge you to grow.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.125rem', marginBottom: '3rem' }}>
            {communities.map((c) => (
              <div key={c.name} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem 1.5rem' }}>
                <span style={{ fontSize: '2rem', lineHeight: '1', flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.25rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#5F6B7A' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/communities" className="btn-secondary">View All 13 Communities <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ── NLP PREVIEW ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#071E3D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(215,25,32,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,59,115,0.25) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D71920', marginBottom: '0.75rem' }}>Prayer</span>
              <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Next Level Prayers</h2>
              <div className="red-divider" />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Join a movement of prayer, faith, and spiritual growth as we build a strong prayer culture ahead of the Harvesters FCT launch.
              </p>
              <div style={{ background: 'rgba(215,25,32,0.1)', border: '1px solid rgba(215,25,32,0.3)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', display: 'inline-block' }}>
                <div style={{ fontSize: '0.68rem', color: '#D71920', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Prayer Schedule</div>
                <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.9rem' }}>Monday – Friday | 6:30AM – 7:30AM WAT</div>
              </div>
              <div><a href="https://www.youtube.com/@HarvestersTV" target="_blank" rel="noopener noreferrer" className="btn-primary">Watch NLP on YouTube <ArrowRight size={15} /></a></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Build a Prayer Life', 'Pray With Others', 'Grow Spiritually', 'Share Testimonies'].map((item) => (
                <div key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✨</div>
                  <div style={{ color: '#E2E8F0', fontSize: '0.82rem', fontWeight: '600', lineHeight: '1.4' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GIVING PREVIEW ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Giving</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Partner Through<br />Your Giving</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '2rem', fontSize: '0.975rem' }}>
                As we prepare for the launch of Harvesters FCT, you can partner with the vision through your giving. No pressure — all giving is done from a place of rest, faith, and willingness.
              </p>
              <Link href="/giving" className="btn-primary">View Giving Details <ArrowRight size={15} /></Link>
            </div>
            <div style={{ background: '#071E3D', borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(215,25,32,0.2)', boxShadow: '0 20px 60px rgba(7,30,61,0.2)' }}>
              <div style={{ fontSize: '0.68rem', color: '#D71920', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>Bank Details — Offering & Tithe</div>
              {[['Bank', 'Zenith Bank'], ['Account Name', 'Harvesters Savings Account'], ['Account Number', '1228942350']].map(([label, value]) => (
                <div key={label} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.25rem', fontWeight: '500' }}>{label}</div>
                  <div style={{ color: '#FFFFFF', fontWeight: label === 'Account Number' ? '800' : '600', fontSize: label === 'Account Number' ? '1.5rem' : '0.95rem', letterSpacing: label === 'Account Number' ? '0.08em' : '0' }}>{value}</div>
                </div>
              ))}
              <Link href="/giving" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Go to Giving Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Our Culture</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {values.map((v) => (
              <div key={v.title} className="card">
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFF0F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#D71920', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{v.letter}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.5rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5F6B7A', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIRST HANGOUT GALLERY ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="section-label">Gallery</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Our First Hangout 🎉</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF0F1', border: '1px solid #FFC5C7', borderRadius: '100px', padding: '0.3rem 0.9rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D71920', display: 'block' }} />
                  <span style={{ fontSize: '0.72rem', color: '#D71920', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pre-Launch</span>
                </div>
                <span style={{ color: '#5F6B7A', fontSize: '0.85rem' }}>10 photos · Community Hangout</span>
              </div>
            </div>
            <Link href="/gallery" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              See All 10 Photos <ArrowRight size={15} />
            </Link>
          </div>

          {/* Photo grid — 6 photos in a dynamic layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '0.875rem' }}>
            {/* Large feature photo */}
            <div style={{ gridColumn: 'span 2', gridRow: 'span 1', position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image src="/hangout-01.png" alt="Harvesters FCT First Hangout — Photo 1" fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,30,61,0.65), transparent)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
                <span style={{ display: 'inline-block', background: '#D71920', borderRadius: '100px', padding: '0.2rem 0.7rem', fontSize: '0.65rem', color: '#FFF', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>First Hangout</span>
                <p style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: '700', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Harvesters FCT Community Hangout</p>
              </div>
            </div>

            {/* Tall side photo */}
            <div style={{ gridRow: 'span 2', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
              <Image src="/hangout-02.png" alt="Harvesters FCT First Hangout — Photo 2" fill unoptimized style={{ objectFit: 'cover' }} />
            </div>

            {/* Bottom row — 3 smaller photos */}
            {['/hangout-03.png', '/hangout-04.png', '/hangout-05.png'].map((src, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image src={src} alt={`Harvesters FCT First Hangout — Photo ${i + 3}`} fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          {/* More photos teaser */}
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.875rem' }}>
            {['/hangout-06.png', '/hangout-07.png', '/hangout-08.png'].map((src, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '1' }}>
                <Image src={src} alt={`Harvesters FCT First Hangout — Photo ${i + 6}`} fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            ))}
            {/* +2 more overlay tile */}
            <Link href="/gallery" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '1', display: 'block', textDecoration: 'none' }}>
              <Image src="/hangout-09.png" alt="More hangout photos" fill unoptimized style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,30,61,0.78)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1.75rem', fontWeight: '800', fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: '1' }}>+2</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.72rem', fontWeight: '600' }}>more photos</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: 'relative', padding: '8rem 1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src="/hero_worship.png" alt="CTA background" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,30,61,0.9)' }} />
        </div>
        <div className="container-custom" style={{ position: 'relative', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D71920', marginBottom: '0.875rem' }}>Your Next Step</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#FFFFFF', fontWeight: '800', marginBottom: '1.25rem', lineHeight: '1.15' }}>
            Be Part of Harvesters FCT<br />
            <span style={{ color: '#D71920' }}>From the Beginning</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Whether you join a community, serve on the team, or partner with the vision — there is a place for you here.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/communities" className="btn-primary">Join the Community <ArrowRight size={15} /></Link>
            <Link href="/partnership" className="btn-white-outline">Partner With Us</Link>
            <Link href="/workforce" className="btn-white-outline">Join the Workforce</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
