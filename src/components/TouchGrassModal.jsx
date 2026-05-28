import { useEffect, useState } from 'react';
import '../styles/TouchGrassModal.css';

const messages = [
  "Seriously? 5 minutes on a fake plant shop? Go touch real grass.",
  "Your real plants are dying while you look at these pixels on your cheap screen.",
  "It's been 5 minutes. Do you have no life? Go outside.",
  "Vitamin D deficiency detected. Closing site in 3... 2... (Just kidding i can't even do that, but go out)."
];

const TouchGrassModal = ({ isOpen, onClose, onIgnore }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="rude-grass-overlay">
      <div className="rude-grass-modal">
        <h2>Why are you like this.</h2>
        <p>{message}</p>
        <div className="rude-grass-buttons">
          <button className="rude-btn-primary" onClick={onClose}>
            OK, I'm going outside now
          </button>
          <button className="rude-btn-secondary" onClick={onIgnore}>
            No, I love fake plants more than reality and I am a stupid idiot...
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouchGrassModal;