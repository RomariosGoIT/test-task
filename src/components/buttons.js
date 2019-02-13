import React from 'react';

const Button = ({ prev, next }) => {
  let val = 1;
  return (
    <div>
      <button className="btn" onClick={() => prev(val)}>
        Prev
      </button>
      <button className="btn" onClick={() => next(val)}>
        Next
      </button>
    </div>
  );
};

export default Button;
