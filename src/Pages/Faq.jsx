import React from 'react'
import Sidebar from '../Components/Sidebar'
import Nav from '../Components/Nav'
import Search from '../Components/Search'
import Faqfetching from '../Components/Faqfetching'

const Faq = () => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div >
        <Nav/>
        <Search/><Faqfetching/></div>
      
    </div>
  )
}

export default Faq
