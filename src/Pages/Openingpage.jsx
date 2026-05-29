import React from 'react'
import Sidebar from '../Components/Sidebar'
import Documentdata from './Documentdata'
import Search from '../Components/Search'
import Nav from '../Components/Nav'


const Openingpage = () => {
    
  return (
    <div style={{display:'flex'}}>
        <Sidebar/><div>
 
     
      <Documentdata/>
      </div>
      
    </div>
  )
}

export default Openingpage
