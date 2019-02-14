import React from 'react';

const Button = ({ prev, next, currentPage, lasPage }) => {
  let val = 1;
  const prevBtn =
    currentPage !== 1 ? (
      <button className="btn" onClick={() => prev(val)}>
        Prev
      </button>
    ) : null;
  let nextBtn = '';
  if (lasPage) {
    nextBtn =
      currentPage !== Math.ceil(lasPage.length / 10) ? (
        <button className="btn" onClick={() => next(val)}>
          Next
        </button>
      ) : null;
  }

  let curPage = <span>{currentPage}</span>;

  return (
    <div>
      {prevBtn}
      {curPage}
      {nextBtn}
    </div>
  );
};

export default Button;
