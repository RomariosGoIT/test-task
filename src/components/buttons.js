import React from 'react';

const Button = ({ prev, next, currentPage, lasPage }) => {
  let val = 1;
  const prevBtn =
    currentPage !== 1 ? (
      <button className="btn btn-prev" onClick={() => prev(val)}>
        Prev
      </button>
    ) : (
      ''
    );
  let nextBtn = '';
  if (lasPage) {
    nextBtn =
      currentPage !== Math.ceil(lasPage.length / 10) ? (
        <button className="btn btn-next" onClick={() => next(val)}>
          Next
        </button>
      ) : (
        ''
      );
  }

  let curPage = <span className="pagination__pages">{currentPage}</span>;

  return (
    <div className="pagination">
      {prevBtn}
      {curPage}
      {nextBtn}
    </div>
  );
};

export default Button;
