// src/components/Counter.jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button className='btn bg-pink-200 hover:border-lime-200' onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
