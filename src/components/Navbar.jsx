import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="glass-surface" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Utensils size={28} style={{ color: 'var(--sys-color-primary)' }} />
          <span className="text-title-lg text-primary">Rasoi</span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#menu" className="text-body-md" style={{ textDecoration: 'none', fontWeight: 600 }}>Menu</a>
          <a href="#plans" className="text-body-md" style={{ textDecoration: 'none', fontWeight: 600 }}>Plans</a>
          <Link to="/order" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <ShoppingCart size={18} />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
