import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  setrowsperPage,
}: any) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Left Side - Pagination */}
      <div className="flex items-center gap-4">
        <button
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
          className="bg-white text-black hover:bg-black hover:text-white border-2 border-white rounded-xl px-4 py-2"
        >
          Previous
        </button>

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
          }
          className="bg-white text-black hover:bg-black hover:text-white border-2 border-white rounded-xl px-4 py-2"
        >
          Next
        </button>
      </div>

      {/* Right Side - Rows Per Page */}
      <details className="bg-white text-black rounded-xl px-4 py-2 cursor-pointer">
        <summary>Rows Per Page</summary>

        <div className="mt-2 flex flex-col gap-1 justify-center items-center">
          <h1
            className="cursor-pointer hover:text-blue-600 border-b-2 w-full border-b-black"
            onClick={() => setrowsperPage(10)}
          >
            10
          </h1>

          <h1
            className="cursor-pointer hover:text-blue-600 border-b-2 w-full border-b-black"
            onClick={() => setrowsperPage(20)}
          >
            20
          </h1>

          <h1
            className="cursor-pointer hover:text-blue-600 border-b-2 w-full border-b-black"
            onClick={() => setrowsperPage(50)}
          >
            50
          </h1>

          <h1
            className="cursor-pointer hover:text-blue-600 border-b-2 w-full border-b-black"
            onClick={() => setrowsperPage(100)}
          >
            100
          </h1>
        </div>
      </details>
    </div>
  );
};

export default Pagination;
