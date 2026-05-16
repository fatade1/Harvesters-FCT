'use client';

import { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';

const communities = [
  { name: 'Young Professionals Network', desc: 'For young professionals building careers, growing in faith, and navigating work, purpose, relationships, and life with the right community.', category: 'Interest', icon: '💼', whatsapp: 'https://chat.whatsapp.com/example1' },
  { name: 'Tech & Innovation Faith Group', desc: 'For people in tech, product, design, startups, engineering, data, AI, and innovation who want to grow spiritually while shaping the future.', category: 'Interest', icon: '💻', whatsapp: 'https://chat.whatsapp.com/example2' },
  { name: 'Influencers & Creatives Circle', desc: 'For creators, designers, storytellers, photographers, videographers, media people, and content creators who want to use creativity for impact.', category: 'Interest', icon: '🎨', whatsapp: 'https://chat.whatsapp.com/example3' },
  { name: 'Culinary & Catering Group', desc: 'For food lovers, caterers, chefs, bakers, and hospitality-driven people who enjoy serving, connecting, and building relationships around food.', category: 'Interest', icon: '🍽️', whatsapp: 'https://chat.whatsapp.com/example4' },
  { name: 'Family & Marriage Enrichment', desc: 'For married couples, intending couples, and family-focused individuals who want to build strong homes rooted in love, wisdom, and faith.', category: 'Interest', icon: '🏠', whatsapp: 'https://chat.whatsapp.com/example5' },
  { name: 'Worship & Prayer Group', desc: 'For people passionate about worship, intercession, spiritual growth, and building a consistent prayer life.', category: 'Interest', icon: '🙏', whatsapp: 'https://chat.whatsapp.com/example6' },
  { name: 'Bible Study Group', desc: "For people who want to study scripture deeply, ask questions, grow in understanding, and apply God's Word daily.", category: 'Interest', icon: '📖', whatsapp: 'https://chat.whatsapp.com/example7' },
  { name: 'Business & Marketplace Faith', desc: 'For entrepreneurs, founders, business owners, professionals, and marketplace leaders who want to build with faith, excellence, and integrity.', category: 'Interest', icon: '📈', whatsapp: 'https://chat.whatsapp.com/example8' },
  { name: 'Hospitality Professionals', desc: 'For people in hospitality, guest experience, events, hotel services, customer service, and people-centered professions.', category: 'Interest', icon: '🏨', whatsapp: 'https://chat.whatsapp.com/example9' },
  { name: 'Accountability & Personal Growth', desc: 'For individuals who want structure, discipline, spiritual growth, personal development, consistency, and accountability.', category: 'Interest', icon: '🎯', whatsapp: 'https://chat.whatsapp.com/example10' },
  { name: 'Fashion & Lifestyle', desc: 'For fashion lovers, stylists, designers, beauty creatives, lifestyle professionals, and people interested in culture and expression.', category: 'Interest', icon: '👗', whatsapp: 'https://chat.whatsapp.com/example11' },
  { name: 'Sport and Fitness Group', desc: 'For people who enjoy fitness, sports, wellness, healthy living, and building faith-based friendships through active lifestyles.', category: 'Interest', icon: '⚽', whatsapp: 'https://chat.whatsapp.com/example12' },
  { name: 'Non-Interest Small Group', desc: 'For anyone who simply wants a warm community to belong to, grow with, pray with, and do life with beyond shared interests.', category: 'Non-Interest', icon: '❤️', whatsapp: 'https://chat.whatsapp.com/example13' },
];

interface FormData { fullName: string; phone: string; email: string; address: string; community: string; }

export default function CommunitiesPage() {
  const [selected, setSelected] = useState<typeof communities[0] | null>(null);
  const [form, setForm] = useState<FormData>({ fullName: '', phone: '', email: '', address: '', community: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = (c: typeof communities[0]) => { setSelected(c); setForm(f => ({ ...f, community: c.name })); setSubmitted(false); };
  const closeModal = () => { setSelected(null); setSubmitted(false); };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false); setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Communities</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Join a Community
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.8' }}>
            Interest-based and non-interest-based small groups where you can do life together with people who will love, care for, and challenge you to grow.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">13 Communities</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Find Your People</h2>
            <p style={{ color: '#5F6B7A', maxWidth: '600px', margin: '0 auto', lineHeight: '1.75', fontSize: '0.975rem' }}>
              Before we officially launch, we are already building strong communities. Fill a short form to join any community and get your WhatsApp group link.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {communities.map((c) => (
              <div key={c.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.875rem' }}>
                  <span style={{ fontSize: '2.25rem', lineHeight: '1', flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <span style={{
                      display: 'inline-block', padding: '0.18rem 0.65rem',
                      background: c.category === 'Interest' ? '#EAF4FF' : '#FFF0F1',
                      color: c.category === 'Interest' ? '#003B73' : '#D71920',
                      borderRadius: '100px', fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.35rem',
                    }}>{c.category}</span>
                    <h3 style={{ fontSize: '0.975rem', fontWeight: '700', color: '#071E3D', lineHeight: '1.3', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.name}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#5F6B7A', lineHeight: '1.72', flex: 1, marginBottom: '1.25rem' }}>{c.desc}</p>
                <button onClick={() => openModal(c)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Join This Community <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div onClick={closeModal} style={{ position: 'absolute', inset: 0, background: 'rgba(7,30,61,0.75)', backdropFilter: 'blur(6px)' }} />
          <div style={{ position: 'relative', background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', maxWidth: '520px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 30px 80px rgba(7,30,61,0.3)' }}>
            <button onClick={closeModal} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#F5F7FA', border: '1px solid #DDE3EA', borderRadius: '10px', padding: '0.45rem', cursor: 'pointer', color: '#5F6B7A', display: 'flex' }}>
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{selected.icon}</span>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginTop: '0.5rem' }}>Join: {selected.name}</h2>
                  <p style={{ fontSize: '0.875rem', color: '#5F6B7A', marginTop: '0.375rem' }}>Fill the form below to join this community and receive your WhatsApp group link.</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { id: 'fullName', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                    { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+234 000 000 0000' },
                    { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                    { id: 'address', label: 'Home Address *', type: 'text', placeholder: 'Your home address, FCT' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="form-label" htmlFor={`m-${id}`}>{label}</label>
                      <input id={`m-${id}`} type={type} required placeholder={placeholder} className="form-input"
                        value={form[id as keyof FormData]}
                        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))} />
                    </div>
                  ))}
                  <div>
                    <label className="form-label">Selected Community</label>
                    <input className="form-input" value={selected.name} readOnly style={{ background: '#F5F7FA', cursor: 'not-allowed' }} />
                  </div>
                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Submitting...' : 'Submit & Get WhatsApp Link'}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg,#D71920,#B9141A)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <Check size={28} color="#FFFFFF" strokeWidth={3} />
                </div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.35rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Welcome to the Community!</h2>
                <p style={{ color: '#5F6B7A', lineHeight: '1.75', marginBottom: '2rem', fontSize: '0.925rem' }}>
                  Thank you for joining the Harvesters FCT <strong>{selected.name}</strong>. Click below to join your WhatsApp group.
                </p>
                <a href={selected.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                  Join WhatsApp Group <ArrowRight size={15} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
