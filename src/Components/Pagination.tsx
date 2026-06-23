import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  return (
    <div>
      <button
        onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
        className="bg-white text-black hover:bg-black cursor-pointer hover:text-white border-2 border-white rounded-xl p-3"
      >
        Previous
      </button>

      <span className="text-white p-4">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="bg-white text-black hover:bg-black cursor-pointer hover:text-white border-2 border-white rounded-xl p-3"
        onClick={() =>
          setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
