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
                page {value.page} of{' '}
                {value.restPersonList
                  ? Math.ceil(value.restPersonList.length / 10)
                  : null}
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
