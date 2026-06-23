import React, { useState } from "react";

const DataFiltertask = ({
  paginatedRecords,
  sortBy,
  setSortBy,
  customerName,
  setCustomerName,
  addRecord,
  setCurrentPage,
  updatebyId,
}: any) => {
  const [openinput, setopeninput] = useState<boolean>(false);
  const [updatedName, setupdatedName] = useState<string>("");
  const [selectedId, setselectedId] = useState<number>(0);

  function handleopen(): void {
    return setopeninput((prev) => !prev);
  }

  return (
    <div className="text-white p-4">
      <h2>Customer Table</h2>

      <button
        onClick={() => {
          setSortBy("id");
          setCurrentPage(1);
        }}
        className="bg-white text-black hover:bg-black cursor-pointer hover:text-white border-2 border-white rounded-xl p-3"
      >
        Sort by ID
      </button>

      <button
        onClick={() => {
          setSortBy("date");
          setCurrentPage(1);
        }}
        className="bg-white text-black hover:bg-black cursor-pointer hover:text-white border-2 border-white rounded-xl p-3"
      >
        Sort by Date
      </button>

      <br />
      <br />

      <input
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter Customer"
        className="border-2 border-white p-2 rounded"
      />

      <button
        onClick={addRecord}
        className="bg-white text-black hover:bg-black cursor-pointer hover:text-white border-2 border-white rounded-xl p-3"
      >
        Add Customer
      </button>

      <table className="w-full border-collapse border border-gray-500 mt-6">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-500 px-4 py-2">ID</th>
            <th className="border border-gray-500 px-4 py-2">Customer</th>
            <th className="border border-gray-500 px-4 py-2">Created At</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRecords.map((item: any) => (
            <tr
              key={item.id}
              className="text-center hover:bg-gray-700 transition-colors"
            >
              <td className="border border-gray-500 px-4 py-2">{item.id}</td>

              <td className="border border-gray-500 px-4 py-2">
                {item.customer}
              </td>

              <td className="border border-gray-500 px-4 py-2">
                {new Date(item.Created_At).toLocaleString()}
              </td>
              <td
                className="border border-gray-500 px-4 py-2"
                onClick={() => {
                  setselectedId(item.id);
                  setopeninput(true);
                }}
              >
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openinput && (
        <div>
          <input
            type="text"
            placeholder="enter new name"
            value={updatedName}
            onChange={(e) => {
              setupdatedName(e.target.value);
            }}
          />{" "}
          <button onClick={() => updatebyId(selectedId, updatedName)}>
            save
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default DataFiltertask;
