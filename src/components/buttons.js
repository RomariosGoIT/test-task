import React from 'react';
import { PersonConsumer } from '../context';

const Buttons = () => {
  return (
    <PersonConsumer>
      {value => {
        return (
          <div className="pagination">
            {value.page !== 1 ? (
              <button
                className="btn btn-prev"
                onClick={() => value.onPrevPage(1)}>
                <i className="fas fa-angle-left" />
              </button>
            ) : null}
            {
              <span className="pagination__pages">
                {value.pageCount.start === 0
                  ? value.pageCount.start + 1
                  : value.pageCount.start + 4}
                -
                {value.pageCount.end > value.data.length
                  ? value.data.length
                  : value.pageCount.end + 3}
              </span>
            }
            {!value.restPersonList ? null : value.page !==
              Math.ceil(value.restPersonList.length / 10) ? (
              <button
                className="btn btn-next"
                onClick={() => value.onNextPage(1)}>
                <i className="fas fa-angle-right" />
              </button>
            ) : null}
          </div>
        );
      }}
    </PersonConsumer>
  );
};

export default Buttons;
