import React, { useState, useEffect } from 'react';

const CountUp = ({ endValue, duration = 2000, prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newCount = Math.floor(progress * endValue);
      setCount(newCount);
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    requestAnimationFrame(updateCount);
  }, [endValue, duration]);

  return (
    <div className="count-up" style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
      <span className="count-value">{prefix}{count}</span>
    </div>
  );
};

export default CountUp;
