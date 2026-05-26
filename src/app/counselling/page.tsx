'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const categories = ['General Counselling', 'Relationship / Marriage', 'Family', 'Career / Purpose', 'Spiritual Growth', 'Prayer Request', 'Other'];
const modes = ['Physical', 'Phone Call', 'Video Call'];

export default function CounsellingPage() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', date: '', time: '', category: '', message: '', mode: '', consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'New Counselling Request - Harvesters FCT',
          from_name: 'Harvesters FCT Website',
          ...form
        })
      });
      if (response.ok) setSubmitted(true);
      else console.error('Form submission failed.');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Pastoral Support</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Book Counselling
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: '1.8' }}>
            Need someone to talk to, pray with, or receive guidance from? Harvesters FCT is committed to walking with you.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 1.5rem', background: '#EAF4FF' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Info */}
            <div>
              <span className="section-label">We Are Here For You</span>
              <h2 className="section-title" style={{ marginBottom: '1rem', color: '#003B73' }}>You Don't Have to Walk Alone</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '2rem', fontSize: '0.975rem' }}>
                Our pastoral team is available for counselling, prayer, and support. Fill the form to book a session, and our team will reach out to confirm your appointment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { emoji: '💬', title: 'General Counselling', desc: 'Talk through life challenges with a pastoral counsellor.' },
                  { emoji: '💑', title: 'Relationship & Marriage', desc: 'Build a stronger relationship rooted in faith.' },
                  { emoji: '🎯', title: 'Career & Purpose', desc: 'Navigate your calling and career with wisdom.' },
                  { emoji: '🙏', title: 'Prayer Support', desc: 'Request prayer for specific needs or situations.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FFFFFF', border: '1px solid #DDE3EA', borderRadius: '14px', padding: '1.25rem' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: '700', color: '#071E3D', fontSize: '0.9rem', marginBottom: '0.2rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{item.title}</div>
                      <div style={{ color: '#5F6B7A', fontSize: '0.82rem', lineHeight: '1.5' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #DDE3EA', boxShadow: '0 4px 24px rgba(0,59,115,0.08)' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '1.75rem' }}>Book a Session</h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div><label className="form-label" htmlFor="c-name">Full Name *</label><input id="c-name" type="text" required className="form-input" placeholder="Full name" value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} /></div>
                      <div><label className="form-label" htmlFor="c-phone">Phone *</label><input id="c-phone" type="tel" required className="form-input" placeholder="+234..." value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                    </div>
                    <div><label className="form-label" htmlFor="c-email">Email *</label><input id="c-email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div><label className="form-label" htmlFor="c-date">Preferred Date *</label><input id="c-date" type="date" required className="form-input" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} /></div>
                      <div><label className="form-label" htmlFor="c-time">Preferred Time *</label><input id="c-time" type="time" required className="form-input" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} /></div>
                    </div>
                    <div><label className="form-label" htmlFor="c-cat">Category *</label>
                      <select id="c-cat" required className="form-select" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                        <option value="">Select a category</option>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div><label className="form-label" htmlFor="c-mode">Preferred Mode *</label>
                      <select id="c-mode" required className="form-select" value={form.mode} onChange={e => setForm(f => ({ ...f, mode: e.target.value }))}>
                        <option value="">Select mode</option>
                        {modes.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <div><label className="form-label" htmlFor="c-msg">Brief Message</label><textarea id="c-msg" className="form-textarea" placeholder="Share a little about what you'd like to discuss..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <input id="c-consent" type="checkbox" required checked={form.consent} onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))} style={{ marginTop: '3px', accentColor: '#D71920', width: '16px', height: '16px', cursor: 'pointer' }} />
                      <label htmlFor="c-consent" style={{ fontSize: '0.78rem', color: '#5F6B7A', lineHeight: '1.5', cursor: 'pointer' }}>
                        I consent to Harvesters FCT contacting me regarding this request and handling my information with confidentiality. *
                      </label>
                    </div>
                    <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Submitting...' : (<>Book Counselling Session <ArrowRight size={15} /></>)}
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#003B73', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <Check size={28} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Booking Received!</h3>
                  <p style={{ color: '#5F6B7A', lineHeight: '1.75', fontSize: '0.925rem' }}>
                    Thank you for reaching out. Our pastoral team will review your request and contact you to confirm your session. You are not alone.
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
