'use client';

import { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';

export default function GivingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('1228942350');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Giving</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Give to Harvesters FCT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: '1.8' }}>
            All giving is done from a place of rest, faith, and willingness — for God loves a cheerful giver.
          </p>
        </div>
      </section>

      {/* Giving Section */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Your Contribution</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Partner Through Your Giving</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                Every contribution helps us build a strong foundation for the work God is starting in the FCT. Whether it is your tithe, an offering, or a one-time gift — it all matters.
              </p>
              <blockquote style={{ borderLeft: '3px solid #D71920', paddingLeft: '1.25rem', color: '#5F6B7A', fontStyle: 'italic', lineHeight: '1.75', marginBottom: '2rem', fontSize: '0.95rem' }}>
                "God loves a cheerful giver." — 2 Corinthians 9:7
              </blockquote>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:fct@harvestersng.org?subject=Giving%20Enquiry" className="btn-secondary">Contact Finance Team</a>
              </div>
            </div>

            {/* Bank Card */}
            <div>
              <div style={{ background: '#071E3D', borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(215,25,32,0.2)', boxShadow: '0 20px 60px rgba(7,30,61,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(215,25,32,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ fontSize: '0.68rem', color: '#D71920', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  Bank Details — Offering &amp; Tithe
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem', fontWeight: '500' }}>Bank Name</div>
                  <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.1rem' }}>Zenith Bank</div>
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem', fontWeight: '500' }}>Account Name</div>
                  <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '0.95rem' }}>Harvesters Savings Account</div>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem', fontWeight: '500' }}>Account Number</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#FFFFFF', fontWeight: '800', fontSize: '2.25rem', letterSpacing: '0.1em' }}>1228942350</div>
                </div>
                <button id="copy-account-btn" onClick={handleCopy} style={{
                  width: '100%', padding: '0.875rem',
                  background: copied ? 'rgba(14,124,58,0.15)' : 'rgba(215,25,32,0.15)',
                  border: `2px solid ${copied ? '#10B981' : '#D71920'}`,
                  borderRadius: '12px',
                  color: copied ? '#10B981' : '#D71920',
                  fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  transition: 'all 0.3s ease', fontFamily: "'Plus Jakarta Sans',sans-serif",
                }}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Account Number Copied!' : 'Copy Account Number'}
                </button>
              </div>
              <p style={{ textAlign: 'center', color: '#5F6B7A', fontSize: '0.78rem', marginTop: '1rem' }}>
                Transactions are secure. Contact us if you need any help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { emoji: '💝', title: 'Tithe', desc: 'Give your tithe as an act of faithfulness and trust in God.' },
              { emoji: '🎁', title: 'Offering', desc: 'Your offering supports the vision and work of Harvesters FCT.' },
              { emoji: '🤝', title: 'Partnership Giving', desc: 'Partner financially with the launch of this new campus.' },
              { emoji: '🙌', title: 'No Pressure', desc: 'Give from a place of rest, willingness, and cheerfulness.' },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{item.emoji}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.5rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5F6B7A', lineHeight: '1.65' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', background: '#EAF4FF', textAlign: 'center' }}>
        <div className="container-custom">
          <h2 className="section-title" style={{ color: '#003B73', marginBottom: '1rem' }}>Partner Beyond Giving</h2>
          <p style={{ color: '#5F6B7A', marginBottom: '2rem' }}>You can also partner through your time, skills, and resources.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="/partnership" className="btn-blue">Become a Partner <ArrowRight size={15} /></a>
            <a href="/workforce" className="btn-secondary">Join the Workforce</a>
          </div>
        </div>
      </section>
    </div>
  );
}
