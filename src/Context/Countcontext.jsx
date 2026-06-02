import React, { createContext, useState } from "react";

export const Countcontext = createContext();

export const CountProvider = ({ children }) => {

  const [faqCount, setFaqCount] = useState(0);
  const [documentCounts, setdocumentcount] = useState(0);

  return (

    <Countcontext.Provider
      value={{
        faqCount,
        setFaqCount,
        documentCounts,
        setdocumentcount
      }}
    >

      {children}

    </Countcontext.Provider>

  );

};