'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';

const socialIcons = [
  { label: 'Instagram', href: 'https://www.instagram.com/harvesters.fct/', svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: 'Facebook', href: 'https://www.facebook.com/Harvesters.fct', svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: 'YouTube', href: 'https://www.youtube.com/@HarvestersTV', svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission - Harvesters FCT',
          from_name: 'Harvesters FCT Website',
          ...form
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed.');
      }
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
          <span className="section-label" style={{ color: '#FF6B6B' }}>Contact</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Contact Harvesters FCT
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: '1.8' }}>
            Have a question? Send us a message and our team will reach out to you.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Info */}
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>We'd Love to Hear From You</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '2.5rem', fontSize: '0.975rem' }}>
                Whether you have a question about the upcoming launch, want to know more about our communities, or need to speak with someone — we are here for you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: MapPin, label: 'Location', value: 'Federal Capital Territory, Nigeria' },
                  { icon: Phone, label: 'Phone', value: '+234 000 000 0000', href: 'tel:+2340000000000' },
                  { icon: Mail, label: 'Email', value: 'fct@harvestersng.org', href: 'mailto:fct@harvestersng.org' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFF0F1', border: '1px solid #FFC5C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: '#D71920' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#5F6B7A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{label}</div>
                      {href ? <a href={href} style={{ color: '#071E3D', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none' }}>{value}</a>
                        : <div style={{ color: '#071E3D', fontWeight: '600', fontSize: '0.95rem' }}>{value}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#5F6B7A', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Follow Us</div>
                <div style={{ display: 'flex', gap: '0.625rem' }}>
                  {socialIcons.map(({ label, href, svg }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #DDE3EA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5F6B7A', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D71920'; (e.currentTarget as HTMLElement).style.color = '#D71920'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#DDE3EA'; (e.currentTarget as HTMLElement).style.color = '#5F6B7A'; }}>
                      {svg}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: '2.5rem', background: '#003B73', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.68rem', color: '#D71920', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Launch Status</div>
                <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.35rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Harvesters FCT — Coming Soon</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>Sunday Service: TBA • Midweek: TBA</div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #DDE3EA', boxShadow: '0 4px 24px rgba(7,30,61,0.06)' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '1.75rem' }}>Send a Message</h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div><label className="form-label" htmlFor="ct-name">Name *</label><input id="ct-name" type="text" required className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div><label className="form-label" htmlFor="ct-email">Email *</label><input id="ct-email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                      <div><label className="form-label" htmlFor="ct-phone">Phone</label><input id="ct-phone" type="tel" className="form-input" placeholder="+234..." value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                    </div>
                    <div><label className="form-label" htmlFor="ct-msg">Message *</label><textarea id="ct-msg" required className="form-textarea" style={{ minHeight: '140px' }} placeholder="How can we help you?" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
                    <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : (<>Send Message <ArrowRight size={15} /></>)}
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#003B73', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <Check size={28} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: '#5F6B7A', lineHeight: '1.75', fontSize: '0.925rem' }}>
                    Thank you for reaching out to Harvesters FCT. Our team will review your message and get back to you soon.
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
