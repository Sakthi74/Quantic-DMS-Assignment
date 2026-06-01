import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Nav from '../Components/Nav'
import Search from '../Components/Search'
import Faqfetching from '../Components/Faqfetching'

const Faq = () => {

  const [Searching, setsearch] = useState("")
  const [faqCount, setFaqCount] = useState(0)

  return (
    <div style={{ display: 'flex' }}>

      <Sidebar num={faqCount}  />

      <div>

        <Nav />

        <Search
          Searching={Searching}
          setsearch={setsearch}
        />

        <Faqfetching Searching={Searching}   setFaqCount={setFaqCount}  />

      </div>

    </div>
  )
}

export default Faq