import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Book, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Next Level Prayers | Harvesters FCT',
  description: 'Join Next Level Prayers — build a consistent prayer life and grow spiritually ahead of the Harvesters FCT launch.',
};

const reasons = [
  { icon: '🙏', title: 'Build a Stronger Prayer Life', desc: 'Develop a consistent, powerful prayer habit rooted in faith and scripture.' },
  { icon: '🤝', title: 'Pray With Others', desc: 'Join a community of believers interceding together for breakthrough.' },
  { icon: '📖', title: 'Grow Spiritually', desc: 'Feed your spirit with the Word and grow in your relationship with God.' },
  { icon: '🔔', title: 'Stay Connected', desc: 'Remain connected to the Harvesters FCT community before launch.' },
  { icon: '✨', title: 'Share Testimonies', desc: 'Receive and share testimonies of what God is doing in your life.' },
  { icon: '💡', title: 'Become a Disciple', desc: 'Be part of a movement of people becoming fully devoted followers of Christ.' },
];

export default function NextLevelPrayersPage() {
  return (
    <div>
      <section className="page-hero" style={{ padding: '6rem 1.5rem 5rem', position: 'relative' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: '#FF6B6B' }}>Prayer</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FFFFFF', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.25rem' }}>
            Next Level Prayers
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            Join a movement of prayer, faith, testimonies, and spiritual growth as we build a strong prayer culture ahead of the Harvesters FCT launch.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(215,25,32,0.15)', border: '1px solid rgba(215,25,32,0.35)', borderRadius: '14px', padding: '1rem 1.5rem' }}>
            <Clock size={20} style={{ color: '#D71920' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.68rem', color: '#D71920', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Prayer Schedule</div>
              <div style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '0.95rem' }}>Monday – Friday | 6:30AM – 7:30AM WAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* About NLP */}
      <section style={{ padding: '6rem 1.5rem', background: '#FFFFFF' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">About NLP</span>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>What is Next Level Prayers?</h2>
              <div className="red-divider" />
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginTop: '1.25rem', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                Next Level Prayers (NLP) is a prayer platform that helps people build a consistent prayer life, grow in faith, and experience God through prayer. Participants are encouraged to build a prayer life, receive noticeable testimonies, and become disciples of Christ.
              </p>
              <p style={{ color: '#5F6B7A', lineHeight: '1.85', marginBottom: '2rem', fontSize: '0.975rem' }}>
                As Harvesters FCT prepares for its official launch, we invite you to join the prayer movement and be part of building a strong prayer culture in the FCT from the very beginning.
              </p>
              <a href="https://www.youtube.com/@HarvestersTV" target="_blank" rel="noopener noreferrer" className="btn-primary">Watch NLP on YouTube <ArrowRight size={15} /></a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Clock, label: 'Prayer Days', value: 'Monday to Friday' },
                { icon: Clock, label: 'Prayer Time', value: '6:30AM – 7:30AM WAT' },
                { icon: Book, label: 'Format', value: 'Live Prayer & Word' },
                { icon: Star, label: 'Focus', value: 'Discipleship & Testimonies' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#EAF4FF', border: '1px solid #DDE3EA', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #DDE3EA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: '#003B73' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#5F6B7A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                    <div style={{ fontSize: '0.95rem', color: '#071E3D', fontWeight: '700', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section style={{ padding: '6rem 1.5rem', background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Join NLP?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {reasons.map(r => (
              <div key={r.title} className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{r.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#071E3D', marginBottom: '0.5rem', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{r.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5F6B7A', lineHeight: '1.7' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" style={{ padding: '6rem 1.5rem', background: '#071E3D', textAlign: 'center' }}>
        <div className="container-custom">
          <span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D71920', marginBottom: '0.75rem' }}>Take Action</span>
          <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>Join the Prayer Movement</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.975rem', lineHeight: '1.75', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Be part of the growing Harvesters FCT prayer community. Join NLP, connect with others, and build your prayer life before the official launch.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <a href="https://www.youtube.com/@HarvestersTV" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Watch on YouTube <ArrowRight size={15} />
            </a>
            <Link href="/communities" className="btn-white-outline">Join NLP Community</Link>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(215,25,32,0.2)', borderRadius: '20px', padding: '2.5rem', maxWidth: '560px', margin: '0 auto' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: '800' }}>Testimonies</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Testimonies from the Harvesters FCT prayer community will appear here. Be the first to share yours.</p>
            <a href="mailto:fct@harvestersng.org?subject=Testimony" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', color: '#D71920', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none' }}>
              Share a Testimony <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
