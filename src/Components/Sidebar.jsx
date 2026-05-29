import React from 'react'
import "../Styles/Sidebar.css"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
        const Navigate = useNavigate()

  const Faq = () => {
    Navigate("/faq")
  }
 
  
      const homepage=()=>{
          Navigate("/home")
      }

        

  return (
    <div>
        
      <ul >
        <h1 className='quantich1' style={{color:'white', padding:"2px"}}>🔷 QUANTIC</h1>
        <hr></hr>
        <li>
🗓 Dashboard</li>
        <li>
📊 Reports</li>
        <li>
📒 Leads</li>
        <li>
👥 Contacts</li>
        <li>🎟️ Tickets</li>   
        <li>
👨‍💼 Accounts</li>
        <li> 
👤 Employees</li>
<li>🤝 Partners</li>
      <h4 className='contenthubh4'>DOCUMENT HUB</h4>
      
        
        <li className='routingelems'onClick={homepage}>🗎 DOCUMENTS</li>
        <li className='routingelems' onClick={Faq}>❓ FAQs</li>
        <li className='routingelems'>🔍 CONTENT SEARCH</li>
      </ul>
      
      
    </div>
  )
}

export default Sidebar
