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
  setsearchCustomer,
  searchCustomer,
}: any) => {
  const [openinput, setopeninput] = useState<boolean>(false);
  const [updatedName, setupdatedName] = useState<string>("");
  const [selectedId, setselectedId] = useState<number>(0);

  function handleopen(): void {
    return setopeninput((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Customer Dashboard</h2>
      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => {
            setSortBy("id");
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Sort by ID
        </button>

        <button
          onClick={() => {
            setSortBy("date");
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Sort by Date
        </button>
      </div>
      //Add Customer
      <div className="flex gap-3 mb-6">
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter Customer"
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addRecord}
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
        >
          Add Customer
        </button>
        <input
          value={searchCustomer}
          onChange={(e) => {
            setsearchCustomer(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search Customer"
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Table Card */}
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Created At</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedRecords.map((item: any) => (
              <tr
                key={item.id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.customer}</td>
                <td className="p-3">
                  {new Date(item.Created_At).toLocaleString()}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => {
                      setselectedId(item.id);
                      setopeninput(true);
                    }}
                    className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-black transition"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      //Edit Modal
      {openinput && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-[300px]">
            <h3 className="text-lg font-semibold mb-4">Edit Customer</h3>

            <input
              type="text"
              placeholder="Enter new name"
              value={updatedName}
              onChange={(e) => setupdatedName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setopeninput(false)}
                className="px-3 py-2 rounded bg-gray-600 hover:bg-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  updatebyId(selectedId, updatedName);
                  setopeninput(false);
                  setupdatedName("");
                }}
                className="px-3 py-2 rounded bg-green-600 hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFiltertask;
