import React from 'react'
import "../Styles/Sidebar.css"
import { useNavigate } from 'react-router-dom'

const Sidebar = ({num,documentdata}) => {
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
      
        
        <li className='routingelems'onClick={homepage}>🗎 DOCUMENTS {documentdata} </li>
        <li className='routingelems' onClick={Faq}>❓ FAQs<strong>{num}</strong></li>
        <li className='routingelems'onClick={contentsearch}>🔍 CONTENT SEARCH</li>
      </ul>
      
      
    </div>
  )
}

export default Sidebar
