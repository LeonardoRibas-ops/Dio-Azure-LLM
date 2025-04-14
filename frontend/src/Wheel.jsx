import React from 'react';

const llms = ["ChatGPT", "Claude", "Gemini", "LLaMA", "Mistral"];

export default function Wheel({ onSpin }) {
  const spinWheel = () => {
    const selected = llms[Math.floor(Math.random() * llms.length)];
    onSpin(selected);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={spinWheel} style={{ fontSize: '2rem', padding: '1rem' }}>🎡 Girar Roleta</button>
    </div>
  );
}