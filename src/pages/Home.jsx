import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Subscriptions from '../components/Subscriptions';
import CustomMealBuilder from '../components/CustomMealBuilder';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container" style={{ marginTop: '4rem', marginBottom: '6rem', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        <Menu />
        <CustomMealBuilder />
        <Subscriptions />
        <Testimonials />
      </div>
    </>
  );
}
