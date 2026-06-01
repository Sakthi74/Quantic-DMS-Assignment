import React from 'react'

import Openingpage from './Pages/Openingpage'
import Faq from './Pages/Faq'
import Contentsearchpage from './Pages/Contentsearchpage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Openingpage />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Openingpage/>} />
        <Route
  path="/content"
  element={<Contentsearchpage />}
/>

      </Routes>

    </BrowserRouter>

  )

}

export default App