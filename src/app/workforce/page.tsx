'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const departments = [
  { name: 'Worship Team', icon: '🎵', desc: 'For singers, musicians, and worshippers helping create an atmosphere of worship, praise, and encounter.', who: 'Singers, musicians, worshippers' },
  { name: 'Prayer Team', icon: '🙏', desc: 'For people passionate about intercession, spiritual growth, and building a strong prayer culture.', who: 'Intercessors, prayer warriors' },
  { name: 'Media Team', icon: '📸', desc: 'For photographers, videographers, livestream operators, editors, designers, and media-minded volunteers.', who: 'Creatives, media professionals' },
  { name: 'Protocol Team', icon: '🎖️', desc: 'For people who can support order, coordination, guest movement, and service flow.', who: 'Organized, detail-oriented' },
  { name: 'Ushering Team', icon: '🤝', desc: 'For warm, organized, and people-friendly individuals who can welcome and guide worshippers.', who: 'People-friendly, hospitable' },
  { name: 'Greeters', icon: '👋', desc: 'For warm and friendly individuals who welcome members and guests at the entrance, making everyone feel at home.', who: 'Warm, welcoming, friendly' },
  { name: 'Follow-Up Team', icon: '📞', desc: 'For people who can help connect with first-timers, new members, and people who need care.', who: 'Compassionate, communicative' },
  { name: "Children's Ministry", icon: '👦', desc: 'For people passionate about teaching, caring for, and creating a safe environment for children.', who: 'Patient, nurturing, child-loving' },
  { name: 'Teens Ministry', icon: '🎒', desc: 'For people who can mentor, guide, and build meaningful relationships with teenagers.', who: 'Youth-focused, relatable' },
  { name: 'Technical / Sound Team', icon: '🔊', desc: 'For people skilled in sound, lighting, equipment setup, projection, and technical support.', who: 'Tech-savvy, detail-oriented' },
  { name: 'Content & Social Media', icon: '📱', desc: 'For people who can support online visibility through content creation, graphics, and social media management.', who: 'Digital natives, creatives' },
  { name: 'Outreach Team', icon: '🌍', desc: 'For people passionate about evangelism, community impact, and reaching people outside the church.', who: 'Evangelistic, community-minded' },
  { name: 'Operations / Admin', icon: '📋', desc: 'For people who love structure, planning, coordination, documentation, and behind-the-scenes excellence.', who: 'Organized, administrative' },
  { name: 'Program managers/Event organizers', icon: '🎨', desc: 'For organized and creative coordinators who plan, structure, design, and run events with excellence.', who: 'Organized, creative, event coordinators' },
  { name: 'Traffic', icon: '🚗', desc: 'For volunteers who support car parking, logistics, and vehicular order around the venue.', who: 'Alert, helpful, active' },
  { name: 'Venue management', icon: '🏢', desc: 'For individuals who manage the venue setup, facilities, seating arrangement, and venue maintenance.', who: 'Resourceful, hands-on, organized' },
  { name: 'Call centre', icon: '☎️', desc: 'For volunteers making care calls, outreach calls, and follow-ups to keep our community connected.', who: 'Good communicators, patient, caring' },
  { name: 'Data capturing & Analysis', icon: '📊', desc: 'For analytical individuals who handle attendance data, guest registration, data entry, and reports.', who: 'Analytical, detail-oriented, tech-savvy' },
  { name: 'Celebration team', icon: '🎉', desc: 'For high-energy volunteers who celebrate first-timers, birthdays, and special milestones in our services.', who: 'Enthusiastic, welcoming, joyful' },
];

export default function WorkforcePage() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', address: '', department: '', isMember: '' });
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
          subject: 'New Workforce Registration - Harvesters FCT',
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

  const handleJoin = (name: string) => {
    setForm(f => ({ ...f, department: name }));
    document.getElementById('workforce-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Workforce</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Join the Launch Workforce
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
            There is a place for you to serve. Be part of the team building this campus from the ground up.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Why Serve?</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Build Something That Lasts</h2>
            <p style={{ color: '#5F6B7A', lineHeight: '1.85', fontSize: '0.975rem' }}>
              Whether your strength is worship, media, hospitality, prayer, children&apos;s ministry, outreach, or creative support — there is a place for you. This is your opportunity to use your gifts, skills, and passion to serve God and people as we prepare for the official launch.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section style={{ padding: '5rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Service Areas</span>
            <h2 className="section-title">Find Your Place to Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {departments.map(d => (
              <div key={d.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.875rem' }}>
                  <span style={{ fontSize: '2rem', lineHeight: '1', flexShrink: 0 }}>{d.icon}</span>
                  <h3 style={{ fontSize: '0.975rem', fontWeight: '700', color: '#071E3D', lineHeight: '1.3', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{d.name}</h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#5F6B7A', lineHeight: '1.7', flex: 1, marginBottom: '0.75rem' }}>{d.desc}</p>
                <div style={{ fontSize: '0.75rem', color: '#003B73', fontWeight: '700', marginBottom: '1rem' }}>👤 {d.who}</div>
                <button onClick={() => handleJoin(d.name)} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.65rem' }}>
                  Join This Department
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="workforce-form" style={{ padding: '6rem 1.5rem', background: '#EAF4FF' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">Apply to Serve</span>
              <h2 className="section-title" style={{ color: '#003B73' }}>Join the Launch Workforce</h2>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #DDE3EA', boxShadow: '0 4px 24px rgba(0,59,115,0.08)' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div><label className="form-label" htmlFor="w-name">Full Name *</label><input id="w-name" type="text" required className="form-input" placeholder="Your full name" value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} /></div>
                    <div><label className="form-label" htmlFor="w-phone">Phone Number *</label><input id="w-phone" type="tel" required className="form-input" placeholder="+234..." value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                  </div>
                  <div><label className="form-label" htmlFor="w-email">Email Address *</label><input id="w-email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                  <div><label className="form-label" htmlFor="w-addr">Home Address *</label><input id="w-addr" type="text" required className="form-input" placeholder="Your home address" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} /></div>
                  <div><label className="form-label" htmlFor="w-dept">Department / Service Area *</label>
                    <select id="w-dept" required className="form-select" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))}>
                      <option value="">Select a department</option>
                      {departments.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div><label className="form-label" htmlFor="w-member">Are you currently a Harvesters member? *</label>
                    <select id="w-member" required className="form-select" value={form.isMember} onChange={e => setForm(f => ({ ...f, isMember: e.target.value }))}>
                      <option value="">Select</option>
                      <option value="yes">Yes, I am a Harvesters member</option>
                      <option value="no">No, but I am interested in joining</option>
                      <option value="used-to">I used to attend Harvesters</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Submitting...' : (<>Join the Launch Workforce <ArrowRight size={15} /></>)}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#003B73', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <Check size={28} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.75rem' }}>Application Received!</h3>
                  <p style={{ color: '#5F6B7A', lineHeight: '1.75', fontSize: '0.925rem' }}>
                    Thank you for joining the Harvesters FCT launch team. Our team will review your application and reach out to you soon. Welcome to the workforce!
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
