import React from "react";
import "../Styles/Docfilter.css"

const Docpagefilter = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        padding: "15px",
        alignItems: "center",
      }}
    >
      <select className="filterSelect">
        <option>Status: All</option>
        <option>Published</option>
        <option>Draft</option>
        <option>In Review</option>
      </select>

      <select className="filterSelect">
        <option>Collection: All</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Support</option>
      </select>

      <select className="filterSelect">
        <option>Type: All</option>
        <option>PDF</option>
        <option>DOCX</option>
        <option>XLSX</option>
      </select>

      <select className="filterSelect">
        <option>Author: All</option>
        <option>Admin</option>
        <option>Sarah K</option>
        <option>Policy Team</option>
      </select>

      <select className="filterSelect">
        <option>Sort: All</option>
        <option>Newest</option>
        <option>Oldest</option>
        <option>A-Z</option>
      </select>

      <button className="clearBtn">
        Clear
      </button>
    </div>
  );
};

export default Docpagefilter;