'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Replace hangout-01.png … hangout-10.png in /public with your real photos ───
const photos = [
  { src: '/hangout-01.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-02.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-03.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-04.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-05.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-06.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-07.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-08.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-09.png', caption: 'First Harvesters FCT Hangout' },
  { src: '/hangout-10.png', caption: 'First Harvesters FCT Hangout' },
];

// Vary aspect ratios for a natural masonry feel
const sizes = ['tall', 'wide', 'square', 'square', 'tall', 'wide', 'square', 'tall', 'wide', 'square'] as const;
const paddingMap = { tall: '130%', wide: '60%', square: '100%' };

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i! > 0 ? i! - 1 : photos.length - 1));
  const next = () => setLightbox(i => (i! < photos.length - 1 ? i! + 1 : 0));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Gallery</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Our First Hangout
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            Before the official launch, we got together — and it was just the beginning.
          </p>
        </div>
      </section>

      {/* Event Header */}
      <section style={{ padding: '4rem 1.5rem 2rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #DDE3EA' }}>
            <div>
              <span className="section-label">First Hangout</span>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Harvesters FCT Community Hangout</h2>
              <p style={{ color: '#5F6B7A', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                10 photos · Pre-launch community gathering
              </p>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF0F1', border: '1px solid #FFC5C7', borderRadius: '100px', padding: '0.4rem 1rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D71920', display: 'block' }} />
              <span style={{ fontSize: '0.75rem', color: '#D71920', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pre-Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section style={{ paddingBottom: '6rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ columns: 3, columnGap: '1rem' }} className="gallery-grid">
            {photos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                style={{ breakInside: 'avoid', marginBottom: '1rem', borderRadius: '16px', overflow: 'hidden', cursor: 'zoom-in', position: 'relative' }}
              >
                <div style={{ position: 'relative', paddingBottom: paddingMap[sizes[i]] }}>
                  <Image
                    src={photo.src}
                    alt={`Harvesters FCT Hangout — Photo ${i + 1}`}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                  {/* Hover overlay */}
                  <div className={`gallery-overlay overlay-${i}`} style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(7,30,61,0.75), transparent)',
                    opacity: 0, transition: 'opacity 0.3s ease',
                  }}>
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                      <span style={{ display: 'inline-block', padding: '0.18rem 0.55rem', background: '#D71920', borderRadius: '100px', fontSize: '0.62rem', color: '#FFF', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                        Photo {i + 1} of {photos.length}
                      </span>
                      <p style={{ color: '#FFF', fontSize: '0.78rem', fontWeight: '600' }}>{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onKeyDown={handleKey}
          tabIndex={0}
          style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(7,30,61,0.97)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', outline: 'none' }}
          autoFocus
        >
          {/* Close */}
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '10px', width: '40px', height: '40px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <X size={20} />
          </button>

          {/* Counter */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.08em' }}>
            {lightbox + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button onClick={prev} style={{ position: 'absolute', left: '1rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', width: '48px', height: '48px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div style={{ position: 'relative', maxWidth: '880px', width: '90%', maxHeight: '78vh', aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
            <Image
              src={photos[lightbox].src}
              alt={`Photo ${lightbox + 1}`}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Caption */}
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <p style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.925rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              {photos[lightbox].caption}
            </p>
            <p style={{ color: '#D71920', fontSize: '0.78rem', fontWeight: '700', marginTop: '0.25rem' }}>
              Harvesters FCT — Pre-Launch Hangout
            </p>
          </div>

          {/* Next */}
          <button onClick={next} style={{ position: 'absolute', right: '1rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', width: '48px', height: '48px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={22} />
          </button>

          {/* Dot nav */}
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1.5rem' }}>
            {photos.map((_, i) => (
              <button key={i} onClick={() => setLightbox(i)} style={{ width: i === lightbox ? '20px' : '8px', height: '8px', borderRadius: '4px', background: i === lightbox ? '#D71920' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-grid div:hover .gallery-overlay { opacity: 1 !important; }
        @media (max-width: 768px) { .gallery-grid { columns: 2 !important; } }
        @media (max-width: 480px) { .gallery-grid { columns: 1 !important; } }
      `}</style>
    </div>
  );
}
