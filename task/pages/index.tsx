// pages/index.tsx
import React from 'react';
import Card from '../src/components/Card'; // Adjust the path as needed

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <Card /> {/* Render the Card component here */}
    </div>
  );
};

export default Home;
