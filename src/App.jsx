import React from 'react'

import Openingpage from './Pages/Openingpage'
import Faq from './Pages/Faq'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Openingpage />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Openingpage/>} />

      </Routes>

    </BrowserRouter>

  )

}

export default App