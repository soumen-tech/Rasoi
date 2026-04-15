import React, { useState } from 'react';

export default function Hero() {
  const [location, setLocation] = useState('');

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 1.5rem', backgroundColor: 'var(--sys-color-surface-dim)', borderRadius: 'var(--sys-shape-xl)', margin: '2rem auto', maxWidth: '1200px' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 className="hook-title" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--sys-color-primary-container)' }}>
          Ghar Jaisa Khana, Har Din
        </h1>
        <p className="text-body-md" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--sys-color-on-surface-variant)' }}>
          Healthy, affordable home-cooked meals for PG students and working professionals. Miss home? Let us cook for you.
        </p>
        
        {/* Soft input form */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto', backgroundColor: 'var(--sys-color-surface-container-lowest)', padding: '0.75rem', borderRadius: 'var(--sys-shape-full)', boxShadow: 'var(--sys-elevation-ambient)' }}>
          <input 
            type="text" 
            placeholder="Enter PG / Hostel / Office Area..." 
            className="quiet-input" 
            style={{ borderRadius: 'var(--sys-shape-full)', padding: '1rem 1.5rem', margin: 0 }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Check Availability</button>
        </div>
      </div>
      
      {/* Hero Image */}
      <div style={{ marginTop: '4rem', width: '100%', borderRadius: 'var(--sys-shape-xl)', overflow: 'hidden', boxShadow: 'var(--sys-elevation-ambient)', position: 'relative', height: '400px' }}>
        <img 
          src="hero_dal_roti.png" 
          alt="Comforting Dal Roti" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
          <span className="chip chip-healthy" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', backgroundColor: 'var(--sys-color-surface-container-lowest)', color: 'var(--sys-color-primary)' }}>✨ Prepared in Home Kitchens</span>
        </div>
      </div>
    </section>
  );
}
