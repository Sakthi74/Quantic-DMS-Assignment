import React, { useState } from "react"
import Sidebar from '../Components/Sidebar'
import Documentdata from './Documentdata'
import Search from '../Components/Search'
import Nav from '../Components/Nav'



const Openingpage = () => {
  const [documentCount, setdocumentCount] = useState(0)
    
  return (
    <div style={{display:'flex'}}>
        <Sidebar documentCount={documentCount}/><div>
 
     
      <Documentdata documentCount={documentCount}/>
      </div>
      
    </div>
  )
}

export default Openingpage
