import React from 'react';

export default function Subscriptions() {
  return (
    <section id="plans" className="plate-group" style={{ backgroundColor: 'var(--sys-color-surface-container)' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-title-lg" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Subscription Plans</h2>
        <p className="text-body-md">Save money and ensure daily comfort with our meal plans.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Weekly Plan */}
        <div className="plate-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <h3 className="text-title-lg" style={{ marginBottom: '0.5rem' }}>Weekly Harmony</h3>
          <p style={{ color: 'var(--sys-color-on-surface-variant)', marginBottom: '2rem' }}>1 meal per day for 7 days</p>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--sys-color-primary)', marginBottom: '2rem', fontFamily: 'var(--sys-typescale-display)' }}>
            ₹699<span style={{ fontSize: '1rem', color: 'var(--sys-color-on-surface-variant)', fontWeight: 500 }}>/week</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--sys-color-on-surface-variant)' }}>
            <li>✨ Save approx. 15%</li>
            <li>✨ Flexible delivery times</li>
            <li>✨ Cancel or pause anytime</li>
          </ul>
          <button className="btn btn-secondary" style={{ width: '100%' }}>Subscribe Now</button>
        </div>

        {/* Monthly Plan */}
        <div className="plate-card" style={{ textAlign: 'center', padding: '3rem 2rem', position: 'relative', boxShadow: 'var(--sys-elevation-ambient-hover)', transform: 'translateY(-10px)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--sys-color-primary-container)', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: 'var(--sys-shape-full)', fontWeight: 600, fontSize: '0.875rem' }}>Most Popular</div>
          <h3 className="text-title-lg" style={{ marginBottom: '0.5rem' }}>Monthly Comfort</h3>
          <p style={{ color: 'var(--sys-color-on-surface-variant)', marginBottom: '2rem' }}>1 meal per day for 30 days</p>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--sys-color-primary)', marginBottom: '2rem', fontFamily: 'var(--sys-typescale-display)' }}>
            ₹2,799<span style={{ fontSize: '1rem', color: 'var(--sys-color-on-surface-variant)', fontWeight: 500 }}>/month</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--sys-color-on-surface-variant)' }}>
            <li>✨ Save approx. 25%</li>
            <li>✨ Free weekend special desserts</li>
            <li>✨ Fully customizable menu</li>
          </ul>
          <button className="btn btn-primary" style={{ width: '100%' }}>Subscribe Now</button>
        </div>

      </div>
    </section>
  );
}
