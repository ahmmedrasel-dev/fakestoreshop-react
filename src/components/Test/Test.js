import React, { useState } from 'react';

const Test = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className='p-3 me-2' onClick={() => setCount(count + 1)}>+</button>
      <button className='p-3 ms-2' onClick={() => setCount(count - 1)
      }>-</button>
    </div>
  );
};

export default Test;