import React, { useState } from 'react';
import Wheel from './components/Wheel';

function App() {
  const [selectedLLM, setSelectedLLM] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>LLM Game Wheel 🎯</h1>
      <Wheel onSpin={setSelectedLLM} />
      {selectedLLM && <h2 style={{ textAlign: 'center' }}>🎉 Você tirou: {selectedLLM}!</h2>}
    </div>
  );
}

export default App;
