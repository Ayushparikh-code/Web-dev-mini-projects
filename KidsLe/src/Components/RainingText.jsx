import React, { useEffect, useState } from 'react';

const RainEffect = () => {
  const [items, setItems] = useState([]);
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // Generate random characters with random positions
  useEffect(() => {
    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push({
          id: i,
          char: characters.charAt(Math.floor(Math.random() * characters.length)),
          left: Math.random() * 100, // Random position
        });
      }
      setItems(newItems);
    };
    generateItems();
    const interval = setInterval(generateItems, 50000); // Refresh items every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute  inset-0 overflow-hidden ">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute text-4xl font-bold text-re animate-rain"
          style={{
            left: `${item.left}vw`,
            animationDuration: `${Math.random() *6 + 5}s`, // Random speed for each character
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};

export default RainEffect;

