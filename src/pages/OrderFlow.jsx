import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderFlow() {
  const [step, setStep] = useState(1);

  return (
    <div className="container" style={{ maxWidth: '600px', margin: '4rem auto', padding: '0 1.5rem' }}>
      
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sys-color-on-surface-variant)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <div className="plate-group">
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="text-title-lg">Your Cart</h2>
            
            <div className="plate-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 className="text-title-lg" style={{ fontSize: '1.25rem' }}>Classic Ghar Ki Thali</h3>
                <div className="text-label-md">Lunch • x1</div>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sys-color-primary-container)' }}>₹120</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--sys-color-surface-container-highest)', paddingTop: '1.5rem', marginTop: '1rem' }}>
              <span className="text-title-lg">Total</span>
              <span className="text-title-lg" style={{ color: 'var(--sys-color-primary)' }}>₹120</span>
            </div>

            <button className="btn btn-primary" onClick={() => setStep(2)}>Proceed to Address</button>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="text-title-lg">Delivery Details</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Full Name" className="quiet-input" />
              <input type="text" placeholder="Phone Number" className="quiet-input" />
              <textarea placeholder="PG Name / Hostel Block / Address" className="quiet-input" rows="3" style={{ resize: 'vertical' }}></textarea>
            </div>

            <button className="btn btn-primary" onClick={() => setStep(3)}>Proceed to Payment</button>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--sys-color-secondary)' }}>
              <CheckCircle size={64} />
            </div>
            
            <div>
              <h2 className="text-title-lg" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Order Confirmed!</h2>
              <p className="text-body-md">Your home-cooked meal is being prepared with care.</p>
            </div>

            {/* Custom component: The Meal Timeline */}
            <div style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--sys-color-surface-container-lowest)', borderRadius: 'var(--sys-shape-lg)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', position: 'relative' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--sys-color-primary)', marginTop: '6px', zIndex: 1 }}></div>
                 <div>
                   <div style={{ fontWeight: 600 }}>Kitchen Notified 👩‍🍳</div>
                   <div className="text-label-md">11:00 AM</div>
                 </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', position: 'relative' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--sys-color-surface-container-highest)', marginTop: '6px', zIndex: 1 }}></div>
                 <div style={{ color: 'var(--sys-color-on-surface-variant)' }}>
                   <div style={{ fontWeight: 600 }}>Cooking specially for you...</div>
                 </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', position: 'relative' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--sys-color-surface-container-highest)', marginTop: '6px', zIndex: 1 }}></div>
                 <div style={{ color: 'var(--sys-color-on-surface-variant)' }}>
                   <div style={{ fontWeight: 600 }}>Out for Delivery 🛵</div>
                 </div>
              </div>

               {/* timeline line */}
               <div style={{ position: 'absolute', top: '2.5rem', left: '1.85rem', width: '2px', height: 'calc(100% - 5rem)', borderLeft: '2px dashed var(--sys-color-tertiary)', opacity: 0.5 }}></div>
            </div>

            <Link to="/" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
