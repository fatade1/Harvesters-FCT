'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const communities = [
  { name: 'Young Professionals Network', desc: 'For young professionals building careers, growing in faith, and navigating work, purpose, relationships, and life with the right community.', category: 'Interest', icon: '💼' },
  { name: 'Tech & Innovation Faith Group', desc: 'For people in tech, product, design, startups, engineering, data, AI, and innovation who want to grow spiritually while shaping the future.', category: 'Interest', icon: '💻' },
  { name: 'Influencers & Creatives Circle', desc: 'For creators, designers, storytellers, photographers, videographers, media people, and content creators who want to use creativity for impact.', category: 'Interest', icon: '🎨' },
  { name: 'Culinary & Catering Group', desc: 'For food lovers, caterers, chefs, bakers, and hospitality-driven people who enjoy serving, connecting, and building relationships around food.', category: 'Interest', icon: '🍽️' },
  { name: 'Family & Marriage Enrichment', desc: 'For married couples, intending couples, and family-focused individuals who want to build strong homes rooted in love, wisdom, and faith.', category: 'Interest', icon: '🏠' },
  { name: 'Worship & Prayer Group', desc: 'For people passionate about worship, intercession, spiritual growth, and building a consistent prayer life.', category: 'Interest', icon: '🙏' },
  { name: 'Bible Study Group', desc: "For people who want to study scripture deeply, ask questions, grow in understanding, and apply God's Word daily.", category: 'Interest', icon: '📖' },
  { name: 'Business & Marketplace Faith', desc: 'For entrepreneurs, founders, business owners, professionals, and marketplace leaders who want to build with faith, excellence, and integrity.', category: 'Interest', icon: '📈' },
  { name: 'Hospitality Professionals', desc: 'For people in hospitality, guest experience, events, hotel services, customer service, and people-centered professions.', category: 'Interest', icon: '🏨' },
  { name: 'Accountability & Personal Growth', desc: 'For individuals who want structure, discipline, spiritual growth, personal development, consistency, and accountability.', category: 'Interest', icon: '🎯' },
  { name: 'Fashion & Lifestyle', desc: 'For fashion lovers, stylists, designers, beauty creatives, lifestyle professionals, and people interested in culture and expression.', category: 'Interest', icon: '👗' },
  { name: 'Sport and Fitness Group', desc: 'For people who enjoy fitness, sports, wellness, healthy living, and building faith-based friendships through active lifestyles.', category: 'Interest', icon: '⚽' },
  { name: 'Non-Interest Small Group', desc: 'For anyone who simply wants a warm community to belong to, grow with, pray with, and do life with beyond shared interests.', category: 'Non-Interest', icon: '❤️' },
];

interface FormData { fullName: string; phone: string; email: string; address: string; community: string; }

export default function CommunitiesPage() {
  const [form, setForm] = useState<FormData>({ fullName: '', phone: '', email: '', address: '', community: '' });
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
          subject: 'New Community Join Request - Harvesters FCT',
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

      {/* Grid of Communities */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">13 Communities</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Find Your People</h2>
            <p style={{ color: '#5F6B7A', maxWidth: '600px', margin: '0 auto', lineHeight: '1.75', fontSize: '0.975rem' }}>
              Explore our communities below, then fill out the form at the bottom of the page to register. Our team will get you added to the right group.
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
                <p style={{ fontSize: '0.86rem', color: '#5F6B7A', lineHeight: '1.72', flex: 1 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Registration Section */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF', borderTop: '1px solid #EAEFF5' }} id="join-form">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              
              {/* Left Column: Context & Guidelines */}
              <div style={{ paddingRight: '1rem' }}>
                <span className="section-label">Get Connected</span>
                <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2.25rem' }}>Ready to Join a Group?</h2>
                <p style={{ color: '#5F6B7A', lineHeight: '1.8', marginBottom: '2.25rem' }}>
                  Small groups are the heartbeat of our church. They are where we pray together, check up on each other, celebrate victories, and walk through challenges as a family. Select the group that aligns with your interest or life stage, and we'll handle the rest.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FFF0F1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.2rem' }}>🤝</span>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '700', color: '#071E3D', fontSize: '1rem', marginBottom: '0.25rem' }}>Genuine Fellowship</h4>
                      <p style={{ color: '#5F6B7A', fontSize: '0.875rem', lineHeight: '1.5' }}>Experience true community and build relationships that extend far beyond Sunday morning services.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FFF0F1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.2rem' }}>📈</span>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '700', color: '#071E3D', fontSize: '1rem', marginBottom: '0.25rem' }}>Spiritual Alignment</h4>
                      <p style={{ color: '#5F6B7A', fontSize: '0.875rem', lineHeight: '1.5' }}>Engage in biblical study, seek guidance, pray, and grow closer to God in a supportive environment.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FFF0F1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.2rem' }}>🎯</span>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '700', color: '#071E3D', fontSize: '1rem', marginBottom: '0.25rem' }}>Common Interests</h4>
                      <p style={{ color: '#5F6B7A', fontSize: '0.875rem', lineHeight: '1.5' }}>Find people who share your career field, creative passions, or current stage of life.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Dynamic Form Card */}
              <div className="card" style={{ padding: '2.5rem', boxShadow: '0 20px 40px rgba(7,30,61,0.04)', border: '1px solid #EAEFF5' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg,#D71920,#B9141A)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <Check size={28} color="#FFFFFF" strokeWidth={3} />
                    </div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.5rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Request Submitted!</h3>
                    <p style={{ color: '#5F6B7A', lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.925rem' }}>
                      Thank you for choosing to join the <strong>{form.community}</strong>. Our church administrators have received your details and will reach out to you shortly to add you to the group.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ fullName: '', phone: '', email: '', address: '', community: '' });
                      }} 
                      className="btn-primary" 
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.25rem' }}>Join a Community</h3>
                    
                    <div>
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input 
                        id="fullName" 
                        type="text" 
                        required 
                        placeholder="e.g. John Doe" 
                        className="form-input"
                        value={form.fullName}
                        onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} 
                      />
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder="e.g. +234 803 123 4567" 
                        className="form-input"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} 
                      />
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="yourname@domain.com" 
                        className="form-input"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
                      />
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="address">Home Address *</label>
                      <input 
                        id="address" 
                        type="text" 
                        required 
                        placeholder="e.g. Wuse II, Abuja" 
                        className="form-input"
                        value={form.address}
                        onChange={e => setForm(f => ({ ...f, address: e.target.value }))} 
                      />
                    </div>
                    
                    <div>
                      <label className="form-label" htmlFor="community">Choose Community *</label>
                      <select 
                        id="community" 
                        required 
                        className="form-select"
                        value={form.community}
                        onChange={e => setForm(f => ({ ...f, community: e.target.value }))}
                      >
                        <option value="" disabled>-- Select a Community --</option>
                        <optgroup label="Interest-Based Communities">
                          {communities.filter(c => c.category === 'Interest').map(c => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Non-Interest-Based Communities">
                          {communities.filter(c => c.category !== 'Interest').map(c => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn-primary" 
                      disabled={loading} 
                      style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem', opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? 'Submitting...' : 'Submit Join Request'}
                    </button>
                  </form>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
