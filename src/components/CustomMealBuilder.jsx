import React, { useState } from 'react';

const BUILDER_CATEGORIES = {
  Base: ['Roti (x4)', 'Jeera Rice', 'Plain Rice'],
  Dal: ['Dal Tadka', 'Dal Makhani', 'Yellow Dal'],
  Sabzi: ['Aloo Gobi', 'Palak Paneer', 'Bhindi Masala', 'Mix Veg']
};

export default function CustomMealBuilder() {
  const [selections, setSelections] = useState({
    Base: 'Mix',
    Dal: 'Yellow Dal',
    Sabzi: 'Aloo Gobi'
  });

  const toggleSelection = (category, item) => {
    setSelections(prev => ({ ...prev, [category]: item }));
  };

  return (
    <section className="plate-group">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-title-lg" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Custom Meal Builder</h2>
        <p className="text-body-md">Create your own perfect plate, just like home.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
        {Object.entries(BUILDER_CATEGORIES).map(([category, items]) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="text-title-lg" style={{ fontSize: '1.25rem' }}>Choose your {category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {items.map(item => {
                const isSelected = selections[category] === item;
                return (
                  <button
                    key={item}
                    onClick={() => toggleSelection(category, item)}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: 'var(--sys-shape-full)',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--sys-typescale-body)',
                      fontWeight: 600,
                      backgroundColor: isSelected ? 'var(--sys-color-primary-fixed)' : 'var(--sys-color-surface-container-highest)',
                      color: isSelected ? 'var(--sys-color-primary)' : 'var(--sys-color-on-surface)',
                      transition: 'all 300ms ease',
                      boxShadow: isSelected ? 'var(--sys-elevation-ambient)' : 'none'
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: 'var(--sys-shape-lg)' }}>
          <div>
            <div className="text-label-md" style={{ marginBottom: '0.25rem' }}>Your Custom Meal</div>
            <div className="text-title-lg" style={{ color: 'var(--sys-color-primary)' }}>₹140 / plate</div>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}
