import React, { useEffect, useState } from 'react';

const SpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; twinkleDelay: number }>>([]);
  const [comets, setComets] = useState<Array<{ id: number; startX: number; startY: number; endX: number; endY: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate stars
    const numStars = 100;
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkleDelay: Math.random() * 3,
      });
    }
    setStars(newStars);

    // Generate comets
    const numComets = 5;
    const newComets = [];
    for (let i = 0; i < numComets; i++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 30; // Start from top third
      const endX = startX + (Math.random() - 0.5) * 50; // Diagonal movement
      const endY = startY + 70 + Math.random() * 30; // Move down
      newComets.push({
        id: i,
        startX,
        startY,
        endX: Math.max(0, Math.min(100, endX)),
        endY: Math.max(0, Math.min(100, endY)),
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 10,
      });
    }
    setComets(newComets);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}

      {/* Comets */}
      {comets.map((comet) => (
        <div
          key={comet.id}
          className="absolute bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            left: `${comet.startX}%`,
            top: `${comet.startY}%`,
            width: '2px',
            height: '50px',
            transform: `rotate(${Math.atan2(comet.endY - comet.startY, comet.endX - comet.startX) * 180 / Math.PI}deg)`,
            animation: `comet-move ${comet.duration}s infinite linear ${comet.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
