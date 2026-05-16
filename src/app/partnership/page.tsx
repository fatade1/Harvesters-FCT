'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const partnershipTypes = [
  { icon: '💰', title: 'Financial Partnership', desc: 'Support the launch financially through one-time or recurring giving.' },
  { icon: '🙏', title: 'Prayer Partnership', desc: 'Commit to praying consistently for Harvesters FCT and its launch.' },
  { icon: '🎪', title: 'Event Partnership', desc: 'Support pre-launch events, community gatherings, or the official launch.' },
  { icon: '🌍', title: 'Outreach Partnership', desc: 'Help us reach communities in the FCT before and after launch.' },
  { icon: '🛠️', title: 'Skill / Volunteer Partnership', desc: 'Offer your professional skills, expertise, or time.' },
  { icon: '🎬', title: 'Media / Creative Partnership', desc: 'Help with photography, videography, content, design, or branding.' },
  { icon: '🏢', title: 'Venue / Logistics Partnership', desc: 'Provide space, equipment, or logistical support for events.' },
  { icon: '⚖️', title: 'Professional Services', desc: 'Offer legal, financial, tech, medical, or consulting services.' },
];

export default function PartnershipPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', partnershipType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false); setSubmitted(true);
  };

  return (
    <div>
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Partnership</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Partner With Harvesters FCT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: '1.8' }}>
            Your partnership helps build a strong foundation for the work God is starting in the FCT.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Why Partner With Us?</h2>
            <div className="red-divider" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ color: '#5F6B7A', lineHeight: '1.85', fontSize: '0.975rem' }}>
              As we prepare for the launch of Harvesters FCT, we welcome partners who want to support the vision through giving, skills, resources, prayer, media, logistics, outreach, and collaboration. Whether you are an individual, business, organization, or professional — there is a partnership opportunity for you.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section style={{ padding: '5rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Partnership Options</span>
            <h2 className="section-title">Ways to Partner</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(265px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {partnershipTypes.map(p => (
              <div key={p.title} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', lineHeight: '1', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.35rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{p.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#5F6B7A', lineHeight: '1.6' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '5rem 1.5rem', background: '#003B73' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '620px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '0.75rem' }}>Get Started</span>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>Become a Partner</h2>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(7,30,61,0.3)' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div><label className="form-label" htmlFor="p-name">Full Name / Organization *</label><input id="p-name" type="text" required className="form-input" placeholder="Your name or organization" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div><label className="form-label" htmlFor="p-phone">Phone *</label><input id="p-phone" type="tel" required className="form-input" placeholder="+234..." value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                    <div><label className="form-label" htmlFor="p-email">Email *</label><input id="p-email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                  </div>
                  <div><label className="form-label" htmlFor="p-type">Partnership Type *</label>
                    <select id="p-type" required className="form-select" value={form.partnershipType} onChange={e => setForm(f => ({ ...f, partnershipType: e.target.value }))}>
                      <option value="">Select partnership type</option>
                      {partnershipTypes.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    </select>
                  </div>
                  <div><label className="form-label" htmlFor="p-msg">Message / Area of Interest</label><textarea id="p-msg" className="form-textarea" placeholder="Tell us more about how you'd like to partner..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Submitting...' : (<>Become a Partner <ArrowRight size={15} /></>)}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D71920', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <Check size={28} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Partnership Request Received!</h3>
                  <p style={{ color: '#5F6B7A', lineHeight: '1.75', fontSize: '0.925rem' }}>
                    Thank you for your interest in partnering with Harvesters FCT. We are grateful for your heart to support the vision. Our team will be in touch soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
