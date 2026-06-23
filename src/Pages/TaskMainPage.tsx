import React, { useMemo, useState } from "react";
import DataFiltertask from "../Components/DataFiltertask";
import Pagination from "../Components/Pagination";

import { genrateRecords } from "../Components/Genraterecord";

const TaskMainPage = () => {
  const [sortBy, setSortBy] = useState<"" | "id" | "date">("");
  const [customerName, setCustomerName] = useState<string>("");
  const [newName, setnewName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [records, setRecords] = useState<RecordType[]>(() =>
    genrateRecords(10000),
  );

  //sorting logic
  const sortedRecords = useMemo(() => {
    const data = [...records];

    if (sortBy === "id") {
      data.sort((a, b) => a.id - b.id);
    } else if (sortBy === "date") {
      data.sort((a, b) => b.Created_At - a.Created_At);
    }

    return data;
  }, [records, sortBy]);

  //update logic
  function updatebyId(id, newname) {
    const Updated_data = sortedRecords.map((item) => {
      if (item.id === id) {
        return { ...item, customer: newname, Created_At: Date.now() };
      } else {
        return item;
      }
    });

    setRecords(Updated_data);
  }

  //pagination
  const rowsPerPage = 10;
  const totalPages = Math.ceil(sortedRecords.length / rowsPerPage);

  const paginatedRecords = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return sortedRecords.slice(startIndex, endIndex);
  }, [sortedRecords, currentPage, rowsPerPage]);

  //adding new records
  function addRecord() {
    if (!customerName.trim()) return;

    setRecords((prev) => [
      ...prev,
      {
        id: uniqueRandomId(),
        customer: customerName,
        Created_At: Date.now(),
      },
    ]);

    setCustomerName("");
  }

  return (
    <>
      <DataFiltertask
        paginatedRecords={paginatedRecords}
        sortBy={sortBy}
        setSortBy={setSortBy}
        customerName={customerName}
        setCustomerName={setCustomerName}
        addRecord={addRecord}
        setCurrentPage={setCurrentPage}
        updatebyId={updatebyId}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TaskMainPage;
