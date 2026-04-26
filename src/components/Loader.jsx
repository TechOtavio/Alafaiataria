import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 200 },
      { target: 60, delay: 600 },
      { target: 85, delay: 1200 },
      { target: 100, delay: 2000 },
    ];

    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => setProgress(target), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="loader-container"
      role="status"
      aria-live="polite"
      aria-label="Carregando página, aguarde"
    >
      <div className="loader-content">
        <img src="/Logo.png" alt="Alfaiataria Bespoke" className="loader-logo" />
        <div className="loader-glow"></div>
      </div>
      <div className="loader-progress-track">
        <div
          className="loader-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
