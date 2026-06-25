'use client';

import { useState } from 'react';
import { Check, X, Copy } from 'lucide-react';
import Image from 'next/image';

type NeedsItem = {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  soldOut?: boolean;
  paidAmount?: number;
};

const specificNeeds: NeedsItem[] = [
  // Musical Instruments
  { id: 'm1', category: 'Musical Instrument', name: 'PEARL DECADE MARPLE DRUM SET & ACCESSORIES', price: 4500000, image: '/images/pearl_drum_set.png', paidAmount: 100000 },
  { id: 'm2', category: 'Musical Instrument', name: 'Keyboard: Nord Grand 2 GBR', price: 7642422.25, image: '/images/nord_grand_2.png' },
  { id: 'm3', category: 'Musical Instrument', name: 'Yamaha PSR-SX600 Arranger Workstation Keyboard', price: 1130000, image: '/images/yamaha_psr_sx600.png' },
  { id: 'm4', category: 'Musical Instrument', name: 'Arturia KeyLab Essential mk3 61-Key Universal MIDI Controller', price: 560000, image: '/images/arturia_keylab.png' },
  { id: 'm5', category: 'Musical Instrument', name: 'LAPTOP FOR KEYBOARD AUDIO INTERFACE', price: 400000, image: '/images/audio_interface_laptop.png' },

  // Multimedia
  { id: 'mm1', category: 'Multimedia', name: 'Behringer U-PHORIA UMC404HD Audio/Midi Interface', price: 300000, image: '/images/behringer_umc404hd.png' },
  { id: 'mm2', category: 'Multimedia', name: 'Sony HXR-NX5R NXCAM Professional FullHD Camcorder - Unit 1', price: 3500000, image: '/images/sony_hxr_nx5r.png' },
  { id: 'mm3', category: 'Multimedia', name: 'Sony HXR-NX5R NXCAM Professional FullHD Camcorder - Unit 2', price: 3500000, image: '/images/sony_hxr_nx5r.png' },
  { id: 'mm4', category: 'Multimedia', name: 'Videography camera Lenses', price: 3500000, image: '/images/video_camera_lenses.png' },
  { id: 'mm5', category: 'Multimedia', name: 'Videography Tripods for Professional Cameras', price: 450000, image: '/images/video_tripods.png' },
  { id: 'mm6', category: 'Multimedia', name: 'Hollyland Mars 400S SDI/HDMI Wireless Video Transmission System', price: 780000, image: '/images/hollyland_mars_400s.png' },
  { id: 'mm7', category: 'Multimedia', name: 'Photography Camera', price: 2000000, image: '/images/photography_camera.png' },
  { id: 'mm8', category: 'Multimedia', name: 'Photography Canon lens (24-70mm lens)', price: 1800000, image: '/images/canon_24_70_lens.png' },
  { id: 'mm9', category: 'Multimedia', name: 'Photography Canon lens adaptor', price: 650000, image: '/images/canon_lens_adaptor.png' },
  { id: 'mm10', category: 'Multimedia', name: 'Blackmagic Atem 1 M/E Advanced panel', price: 4700000, image: '/images/blackmagic_atem.png' },
  { id: 'mm11', category: 'Multimedia', name: 'Blackmagic Design Video Assist HDMI 6G-SDI Recorder and 5" Monitor', price: 1550000, image: '/images/blackmagic_video_assist.png' },
  { id: 'mm12', category: 'Multimedia', name: 'Desktop computer: HP ENVY 795-0035XT-bh Minitower PC', price: 1150000, image: '/images/hp_envy_desktop.png' },
  { id: 'mm13', category: 'Multimedia', name: 'SDI Capture Card', price: 450000, image: '/images/sdi_capture_card.png' },
  { id: 'mm14', category: 'Multimedia', name: 'Hisense TV 65 Inch A6Q UHD 4K Smart - Unit 1', price: 650000, image: '/images/hisense_65_tv.png' },
  { id: 'mm15', category: 'Multimedia', name: 'Hisense TV 65 Inch A6Q UHD 4K Smart - Unit 2', price: 650000, image: '/images/hisense_65_tv.png' },
  { id: 'mm16', category: 'Multimedia', name: 'Hisense TV 65 Inch A6Q UHD 4K Smart - Unit 3', price: 650000, image: '/images/hisense_65_tv.png' },
  { id: 'mm17', category: 'Multimedia', name: 'TABLES & CHAIRS FOR KIDS church', price: 700000, image: '/images/kids_church_furniture.png' },

  // Sound Equipments
  { id: 's1', category: 'Sound Equipments', name: 'BEHRINGER WING COMPACT', price: 3500000, image: '/images/behringer_wing_compact.png' },
  { id: 's2', category: 'Sound Equipments', name: 'Behringer Wing Rack', price: 2500000, image: '/images/behringer_wing_rack.png' },
  { id: 's3', category: 'Sound Equipments', name: '16 CHANNEL POWER SEQUENCER', price: 150000, image: '/images/power_sequencer.png' },
  { id: 's4', category: 'Sound Equipments', name: 'RACK CASE FOR WING RACK', price: 200000, image: '/images/rack_case.png' },
  { id: 's5', category: 'Sound Equipments', name: '3U RACK DRAWER FOR CABLES', price: 100000, image: '/images/rack_drawer.png' },
  { id: 's6', category: 'Sound Equipments', name: 'KLARK TEKNIK DN4816-O STAGE BOX', price: 200000, image: '/images/klark_teknik_stage_box.png' },
  { id: 's7', category: 'Sound Equipments', name: 'BELDEN CAT6 STP CABLE AND CONNECTORS', price: 300000, image: '/images/cat6_stp_cable.png' },
  { id: 's8', category: 'Sound Equipments', name: 'AUDIO CABLES, DI BOXES, MIC STANDS & OTHERS', price: 300000, image: '/images/audio_accessories.png' },
  { id: 's9', category: 'Sound Equipments', name: 'WAVES SUPER RACK PERFORMA + PLUGINS', price: 150000, image: '/images/waves_super_rack.png' },
  { id: 's10', category: 'Sound Equipments', name: 'ZED FULL RANGE (2 Pair) @ 1,500,000/pair', price: 3000000, image: '/images/zed_full_range.png' },
  { id: 's11', category: 'Sound Equipments', name: 'ZED PASSIVE DELAY SUBWOOFER (2 Pairs) @ 2,500,000/pair', price: 5000000, image: '/images/zed_subwoofer.png' },
  { id: 's12', category: 'Sound Equipments', name: 'AMPLIFIERS: WHARFEDALE CPD 4800 (7 Pairs) @ 1,000,000', price: 7000000, image: '/images/wharfedale_cpd4800.png' },
  { id: 's13', category: 'Sound Equipments', name: 'MICROPHONE: SHURE BLX288 DUAL MIC COMBO', price: 1288924, image: '/images/shure_blx288.png' },
  { id: 's14', category: 'Sound Equipments', name: 'MICROPHONE: Shure BLX288/B58 – Wireless Dual Vocal System (4Pairs) @ 1,405,188/pair', price: 5620752, image: '/images/shure_blx288.png' },
  { id: 's15', category: 'Sound Equipments', name: 'MICROPHONEs for percussions: DEBRA WIRED MIC (3 pairs) @ 40,000/pair', price: 120000, image: '/images/debra_wired_mic.png' },
  { id: 's16', category: 'Sound Equipments', name: 'DRUM MICROPHONEs: DEBRA DRUM KIT (7 Pieces) @ 270,000 each', price: 1890000, image: '/images/debra_drum_kit.png' },
  { id: 's17', category: 'Sound Equipments', name: 'FIRMAN 10KVA GEN', price: 960000, image: '/images/firman_gen.png' },
  { id: 's18', category: 'Sound Equipments', name: '2.5 KVA UPS', price: 150000, image: '/images/ups_25kva.png' },
  { id: 's19', category: 'Sound Equipments', name: 'DOUBLE PHASE ADJUSTABLE VOLTAGE REGULATOR', price: 60000, image: '/images/voltage_regulator.png' },
  { id: 's20', category: 'Sound Equipments', name: '5KVA AUTOMATIC VOLTAGE REGULATOR (STABILIZER)', price: 200000, image: '/images/voltage_regulator.png' },
  { id: 's21', category: 'Sound Equipments', name: '16 CHANNEL POWER SEQUENCER', price: 200000, image: '/images/power_sequencer.png' },
  { id: 's22', category: 'Sound Equipments', name: '50M POWER CABLE', price: 100000, image: '/images/power_cable_50m.png' },
  { id: 's23', category: 'Sound Equipments', name: 'DI BOX FOR INSTRUMENTS (2 units) @ 60,000 each', price: 120000, image: '/images/di_box.png' },
];

export default function PartnershipPage() {
  const [loading, setLoading] = useState(false);

  // Specific Needs Modal State
  const [selectedNeed, setSelectedNeed] = useState<NeedsItem | null>(null);
  const [needForm, setNeedForm] = useState({ name: '', phone: '', email: '', amount: '' });
  const [needStep, setNeedStep] = useState(1);
  const [isNeedsModalOpen, setIsNeedsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNeedSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setLoading(true);
    
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'New Partnership Need Committment - Harvesters FCT',
          from_name: 'Harvesters FCT Website',
          ...needForm,
          item: selectedNeed?.name,
          category: selectedNeed?.category,
        })
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); 
      setNeedStep(2); // Move to payment details step
    }
  };

  const handlePaymentMade = () => {
    setNeedStep(3); // Move to thank you step
  };

  const openNeedModal = (need: NeedsItem) => {
    if (need.soldOut) return;
    setSelectedNeed(need);
    setNeedStep(1);
    setNeedForm({ name: '', phone: '', email: '', amount: '' });
    setIsNeedsModalOpen(true);
  };

  const closeNeedModal = () => {
    setIsNeedsModalOpen(false);
    setTimeout(() => {
      setSelectedNeed(null);
      setNeedStep(1);
      setCopied(false);
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('1228942350');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
  };

  const groupedNeeds = [
    { title: "Musical Instruments", items: specificNeeds.filter(n => n.category === 'Musical Instrument') },
    { title: "Multimedia Equipment", items: specificNeeds.filter(n => n.category === 'Multimedia') },
    { title: "Sound Equipment", items: specificNeeds.filter(n => n.category === 'Sound Equipments') }
  ];

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
              As we prepare for the launch of Harvesters FCT, we welcome partners who want to support the vision by helping us secure the necessary equipment and resources. By partnering towards specific needs like Musical Instruments, Multimedia Gear, and Sound Equipment, you are laying the groundwork for a transformative church experience in the FCT.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Needs / Items Grouped */}
      <section style={{ padding: '5rem 1.5rem', background: '#F9FAFC' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Church Needs</span>
            <h2 className="section-title">Specific Partnership Needs</h2>
            <p style={{ color: '#5F6B7A', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              Select a category below to partner towards specific equipment for the launch.
            </p>
          </div>
          
          {groupedNeeds.map((group, groupIndex) => (
            <div key={group.title} style={{ marginBottom: groupIndex < groupedNeeds.length - 1 ? '5rem' : '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#071E3D', margin: 0 }}>{group.title}</h3>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0', marginLeft: '1.5rem' }}></div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {group.items.map((need) => (
                  <div key={need.id} style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    {need.soldOut && (
                      <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#D71920', color: '#FFF', padding: '0.4rem 0.8rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '700', zIndex: 10 }}>
                        SOLD OUT
                      </div>
                    )}
                    
                    <div style={{ position: 'relative', height: '200px', width: '100%', background: '#F1F3F5' }}>
                      {need.image && (
                        <Image src={need.image} alt={need.name} fill style={{ objectFit: 'cover' }} />
                      )}
                      {!need.image && (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9AA5B1' }}>
                          No Image
                        </div>
                      )}
                    </div>
                    
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#003B73', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{need.category}</span>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#071E3D', marginBottom: '1rem', lineHeight: '1.4' }}>{need.name}</h4>
                      
                      <div style={{ marginTop: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: '#5F6B7A' }}>Target:</span>
                          <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#071E3D' }}>{formatCurrency(need.price)}</span>
                        </div>

                        {need.paidAmount && !need.soldOut ? (
                          <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                              <span style={{ color: '#10B981', fontWeight: '600' }}>Paid: {formatCurrency(need.paidAmount)}</span>
                              <span style={{ color: '#5F6B7A' }}>{Math.round((need.paidAmount / need.price) * 100)}%</span>
                            </div>
                            <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', background: '#10B981', width: `${Math.min(100, (need.paidAmount / need.price) * 100)}%`, borderRadius: '3px' }} />
                            </div>
                          </div>
                        ) : null}
                        
                        <button 
                          onClick={() => openNeedModal(need)}
                          disabled={need.soldOut}
                          style={{ 
                            width: '100%', 
                            padding: '0.85rem', 
                            borderRadius: '8px', 
                            background: need.soldOut ? '#E2E8F0' : '#003B73', 
                            color: need.soldOut ? '#94A3B8' : '#FFFFFF', 
                            border: 'none',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            cursor: need.soldOut ? 'not-allowed' : 'pointer',
                            marginTop: (need.paidAmount && !need.soldOut) ? '0.5rem' : '1.5rem',
                            transition: 'background 0.2s'
                          }}
                          onMouseOver={(e) => { if (!need.soldOut) e.currentTarget.style.background = '#002B54'; }}
                          onMouseOut={(e) => { if (!need.soldOut) e.currentTarget.style.background = '#003B73'; }}
                        >
                          {need.soldOut ? 'Fully Funded' : 'Partner Towards This'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Needs Partnership Modal */}
      {isNeedsModalOpen && selectedNeed && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(7, 30, 61, 0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '1.5rem'
        }} onClick={closeNeedModal}>
          <div style={{ 
            background: '#FFFFFF', borderRadius: '24px', width: '100%', maxWidth: '500px', 
            maxHeight: '90vh', overflowY: 'auto', position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={closeNeedModal} style={{ 
              position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#F1F5F9', border: 'none', 
              width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#64748B'
            }}>
              <X size={18} />
            </button>

            {needStep === 1 && (
              <div style={{ padding: '2.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.5rem' }}>Partner Towards a Need</h3>
                  <p style={{ color: '#5F6B7A', fontSize: '0.9rem' }}>You selected: <strong style={{ color: '#003B73' }}>{selectedNeed.name}</strong></p>
                </div>

                <form onSubmit={handleNeedSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div><label className="form-label">Full Name</label><input type="text" required className="form-input" placeholder="Your name" value={needForm.name} onChange={e => setNeedForm(f => ({ ...f, name: e.target.value }))} /></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div><label className="form-label">Phone</label><input type="tel" required className="form-input" placeholder="+234..." value={needForm.phone} onChange={e => setNeedForm(f => ({ ...f, phone: e.target.value }))} /></div>
                    <div><label className="form-label">Email</label><input type="email" required className="form-input" placeholder="your@email.com" value={needForm.email} onChange={e => setNeedForm(f => ({ ...f, email: e.target.value }))} /></div>
                  </div>
                  <div>
                    <label className="form-label">Amount You Want To Give (NGN)</label>
                    <input type="number" min="1000" required className="form-input" placeholder="e.g. 50000" value={needForm.amount} onChange={e => setNeedForm(f => ({ ...f, amount: e.target.value }))} />
                    <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.4rem' }}>Total cost of item: {formatCurrency(selectedNeed.price)}</p>
                  </div>
                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Processing...' : 'Proceed to Give'}
                  </button>
                </form>
              </div>
            )}

            {needStep === 2 && (
              <div style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>🏦</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#071E3D', marginBottom: '0.5rem' }}>Account Details</h3>
                <p style={{ color: '#5F6B7A', fontSize: '0.95rem', marginBottom: '2rem' }}>
                  Thank you, <strong>{needForm.name}</strong>! Please make your transfer of <strong>{formatCurrency(Number(needForm.amount))}</strong> to the account below:
                </p>

                <div style={{ background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Bank Name</span>
                    <strong style={{ fontSize: '1.05rem', color: '#071E3D' }}>Zenith Bank</strong>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Account Number</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <strong style={{ fontSize: '1.4rem', color: '#003B73', letterSpacing: '0.1em' }}>1228942350</strong>
                      <button type="button" onClick={handleCopy} title="Copy Account Number" style={{ 
                        background: copied ? '#D1FAE5' : '#F1F5F9', border: 'none', cursor: 'pointer', 
                        color: copied ? '#10B981' : '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '32px', height: '32px', borderRadius: '8px', transition: 'all 0.2s'
                      }}>
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Account Name</span>
                    <strong style={{ fontSize: '1.05rem', color: '#071E3D' }}>Harvesters intl Christian Centre FCT</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.5rem' }}>
                  Kindly use <strong>"{selectedNeed.name.substring(0, 15)}... Partnership"</strong> as your payment narration.
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#D71920', fontStyle: 'italic', marginTop: '0.5rem' }}>
                    Note: No pressure, all giving is done from a place of rest, faith and willingness.
                  </span>
                </p>

                <button onClick={handlePaymentMade} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  I Have Made Payment
                </button>
              </div>
            )}

            {needStep === 3 && (
              <div style={{ padding: '3.5rem 2.5rem', textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#D71920', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Check size={32} color="#FFFFFF" strokeWidth={3} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#071E3D', marginBottom: '1rem' }}>Thank You!</h3>
                <p style={{ color: '#5F6B7A', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                  God bless you, <strong style={{ color: '#071E3D' }}>{needForm.name}</strong>, for your generous partnership towards the <strong style={{ color: '#003B73' }}>{selectedNeed.name}</strong>.
                  <br /><br />
                  We will confirm your payment shortly and update our goals. Your support is pivotal to what God is building at Harvesters FCT!
                </p>
                <button onClick={closeNeedModal} className="btn-primary" style={{ padding: '0.9rem 2.5rem' }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
