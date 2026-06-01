import React from 'react'
import { useState } from 'react'
import "../Styles/Faqfilter.css"


const Faqfilter = () => {
    const [selectfilter,setselectfilter]= useState("All")
  return (
    <div>
        <ul className='filteru' type="none">
            <li className={`lis ${selectfilter==="All"? "clickchange" : "lis"}` }onClick={()=>{setselectfilter("All")}}>All</li>
            <li className={`lis ${selectfilter==="Billing"? "clickchange" : "lis"}` }onClick={()=>{setselectfilter("Billing")}}>Billing</li>
            <li className={`lis ${selectfilter==="Account"? "clickchange" : "lis"}` }onClick={()=>{setselectfilter("Account")}}>Account</li>
            <li className={`lis ${selectfilter==="Product"? "clickchange" : "lis"}` }onClick={()=>{setselectfilter("Product")}}>Product</li>
            <li className={`lis ${selectfilter==="Technical"? "clickchange" : "lis"}` }onClick={()=>{setselectfilter("Technical")}}>Technical</li>
        </ul>
      
    </div>
  )
}

export default Faqfilter
