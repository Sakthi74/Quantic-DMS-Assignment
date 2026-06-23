import React, { Profiler } from "react";

import Openingpage from "./Pages/Openingpage";
import Faq from "./Pages/Faq";
import Contentsearchpage from "./Pages/Contentsearchpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFiltertask from "./Components/DataFiltertask";
import TaskMainPage from "./Pages/TaskMainPage";
import Tanstackdemo from "./Components/Tanstackdemo";

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) {
  console.log("Component:", id);
  console.log("Phase:", phase); // "mount" or "update"
  console.log("Actual Duration:", actualDuration.toFixed(2), "ms");
  console.log("Base Duration:", baseDuration.toFixed(2), "ms");
  console.log("Start Time:", startTime.toFixed(2));
  console.log("Commit Time:", commitTime.toFixed(2));
  console.log("----------------------------");
}

const App = () => {
  return (
    //     <BrowserRouter>

    //       <Routes>

    //         <Route path="/" element={<Openingpage />} />

    //         <Route path="/faq" element={<Faq />} />
    //         <Route path="/home" element={<Openingpage/>} />
    //         <Route
    //   path="/content"
    //   element={<Contentsearchpage />}
    // />

    //       </Routes>

    //     </BrowserRouter>
    <Profiler id="DataFiltertask" onRender={onRender}>
      {/* <TaskMainPage /> */}
      <Tanstackdemo />
    </Profiler>
  );
};

export default App;
