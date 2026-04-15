import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const MENU_ITEMS = {
  Lunch: [
    { id: 1, name: 'Classic Ghar Ki Thali', price: '₹120', tags: ['Healthy', 'Bestseller'], image: 'menu_lunch_thali.png' },
    { id: 2, name: 'Jeera Rice & Dal Tadka', price: '₹99', tags: ['Comfort'], image: 'menu_lunch_thali.png' },
    { id: 3, name: 'Khichdi with Ghee', price: '₹85', tags: ['Light', 'Digestion'], image: 'menu_lunch_thali.png' }
  ],
  Breakfast: [
    { id: 4, name: 'Kanda Poha & Chai', price: '₹65', tags: ['Fresh'], image: 'menu_breakfast_poha.png' },
    { id: 5, name: 'Aloo Paratha (2pc) & Curd', price: '₹75', tags: ['Filling'], image: 'menu_breakfast_poha.png' }
  ],
  Dinner: [
    { id: 6, name: 'Roti & Seasonal Sabzi', price: '₹110', tags: ['Home Style'], image: 'menu_lunch_thali.png' }
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Lunch');

  return (
    <section id="menu" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 className="text-title-lg" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Today's Menu</h2>
        <p className="text-body-md">Cooked with love to match your mother's recipe.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {Object.keys(MENU_ITEMS).map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: 'var(--sys-shape-full)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontFamily: 'var(--sys-typescale-display)',
              backgroundColor: activeTab === tab ? 'var(--sys-color-primary)' : 'var(--sys-color-surface-container-high)',
              color: activeTab === tab ? 'var(--sys-color-on-primary)' : 'var(--sys-color-on-surface-variant)',
              transition: 'all 300ms ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {MENU_ITEMS[activeTab].map(item => (
          <div key={item.id} className="plate-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={item.image} alt={item.name} className="plate-image" />
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {item.tags.map(tag => (
                <span key={tag} className="chip chip-healthy">{tag}</span>
              ))}
            </div>
            <h3 className="text-title-lg" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sys-color-primary-container)' }}>{item.price}</span>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={16} /> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
