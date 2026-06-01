import React from 'react'
import "../Styles/Sidebar.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from "react-router-dom";

const Sidebar = ({num,documentdata,documentCount}) => {
        const [active, setActive] = useState("documents")
        const Navigate = useNavigate()
        console.log(num)
        console.log(documentdata)

  const Faq = () => {
    Navigate("/faq")
  }
 
  
      const homepage=()=>{
          Navigate("/home")
      }
      const contentsearch=()=>{
          Navigate("/content")
      }

const location = useLocation();

        

  return (
    <div>
        
      <ul className='sidebarul' >
        <h1 className='quantich1' >🔷 QUANTIC<sup>©</sup></h1>
        <hr></hr>
        <li className='sidebarli'>
🗓 Dashboard</li>
        <li className='sidebarli'>
📊 Reports</li>
        <li className='sidebarli'>
📒 Leads</li>
        <li className='sidebarli'>
👥 Contacts</li>
        <li className='sidebarli'>🎟️ Tickets</li>   
        <li className='sidebarli'>
👨‍💼 Accounts</li>
        <li className='sidebarli'> 
👤 Employees</li>
<li className='sidebarli'>🤝 Partners</li>
      <h4 className='contenthubh4'>DOCUMENT HUB</h4>
      
        
        <li className={`sidebarli routingelems ${location.pathname==="/home"?"activeMenu":""}`}   onClick={() => {
    setActive("documents")
    homepage()
  }} >🗎 DOCUMENTS <strong>{documentCount}</strong> </li>
        <li className={`sidebarli routingelems ${location.pathname==="/faq" ? "activeMenu" : ""}`}
  onClick={() => {
    setActive("faq")
    Faq()
  }} >❓ FAQs<strong>{num}</strong></li>
        <li  className={`sidebarli routingelems ${location.pathname==="/content" ? "activeMenu" : ""}`}
  onClick={() => {
    setActive("content")
    contentsearch()
  }}>🔍 CONTENT SEARCH</li>
      </ul>
      
      
    </div>
  )
}

export default Sidebar
