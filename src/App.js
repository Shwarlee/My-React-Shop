import React from 'react';
import './style.css';
import Modal from './Modal';

function App() {
  return (
    <Modal title="Ce site web utilise des 🍪">
      <p>En poursuivant votre navigation, <strong>vous acceptez les cookies.</strong></p>
      <p>Pour en savoir plus, 📝 <u>écrivez-nous!</u></p>
    </Modal>
  );
}

export default App;
