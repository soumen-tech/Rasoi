import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Aarti S.',
    role: 'PG Student',
    text: 'Moving to a new city, the one thing I missed was my mom\'s dal. Rasoi actually comes so close. It feels hygienic, light, and just perfect.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul K.',
    role: 'Software Engineer',
    text: 'I used to order from big apps, but got tired of oily restaurant food. The monthly plan here is a lifesaver. Simple, healthy Ghar ka khana.',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya M.',
    role: 'Hostel Resident',
    text: 'The absolute best part is not having to think about "what to order" every day. The meal timeline makes delivery predictable.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-title-lg" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Testimonials</h2>
        <p className="text-body-md">What our family of customers says.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {REVIEWS.map(review => (
          <div key={review.id} className="plate-card" style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <div style={{ color: 'var(--sys-color-primary)', marginBottom: '1rem', letterSpacing: '0.2em' }}>
              {'★'.repeat(review.rating)}
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--sys-color-on-surface-variant)', flex: 1 }}>"{review.text}"</p>
            <div>
              <div style={{ fontWeight: 700, fontFamily: 'var(--sys-typescale-display)', color: 'var(--sys-color-on-surface)' }}>{review.name}</div>
              <div className="text-label-md">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
