import React, { useEffect, useRef } from 'react';

const BinaryRainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Essential check to make sure the component is mounted
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let drops = [];

    // This function sets up the canvas and the drops array
    const setup = () => {
      // Make the canvas full width and height of its container
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const characters = '01';
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);

      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    };

    const draw = () => {
      // Create a semi-transparent black rectangle for the fading trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = `14px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '0' : '1';
        ctx.fillText(text, i * 14, drops[i] * 14);

        if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Initial setup
    setup();
    
    // Add a resize event listener to re-run setup if the window size changes
    window.addEventListener('resize', setup);
    
    // Start the animation loop
    const interval = setInterval(draw, 33);

    // Cleanup function to remove the listener and interval when the component unmounts
    return () => {
      window.removeEventListener('resize', setup);
      clearInterval(interval);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
    />
  );
};

export default BinaryRainEffect;