import React, { useEffect, useMemo, useState } from "react";
import DataFiltertask from "../Components/DataFiltertask";
import Pagination from "../Components/Pagination";

import { genrateRecords, uniqueId } from "../Components/Genraterecord";

const TaskMainPage = () => {
  const [sortBy, setSortBy] = useState<"" | "id" | "date">("");
  const [customerName, setCustomerName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsperPage, setrowsperPage] = useState<number>(1);
  const [searchCustomer, setsearchCustomer] = useState<string>("");

  const [records, setRecords] = useState<RecordType[]>(() => {
    const storedData: Array = localStorage.getItem("recordData");
    if (storedData) {
      return JSON.parse(storedData);
    }

    return genrateRecords(10000);
  });

  //local storage
  useEffect(() => {
    localStorage.setItem("recordData", JSON.stringify(records));
  }, [records]);

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

  const rowsPerPage = rowsperPage;
  //filter logic
  const filteredRecords = useMemo(() => {
    return sortedRecords.filter((user) =>
      user.customer.toLowerCase().includes(searchCustomer.toLowerCase()),
    );
  }, [sortedRecords, searchCustomer]);
  console.log(searchCustomer);
  console.log(filteredRecords.length);

  //pagination
  const totalPages = Math.ceil(filteredRecords.length / rowsPerPage);

  const paginatedRecords = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return filteredRecords.slice(startIndex, endIndex);
  }, [filteredRecords, currentPage, rowsPerPage]);

  //adding new records
  function addRecord() {
    if (!customerName.trim()) return;

    setRecords((prev) => [
      ...prev,
      {
        id: uniqueId(),
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
        searchCustomer={searchCustomer}
        setsearchCustomer={setsearchCustomer}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        setrowsperPage={setrowsperPage}
      />
    </>
  );
};

export default TaskMainPage;
