import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination-controls">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &laquo; Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
