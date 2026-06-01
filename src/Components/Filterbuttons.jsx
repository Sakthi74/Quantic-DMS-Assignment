import React, { useState } from 'react'
import "../Styles/Filterbutton.css"


const Filterbuttons = () => {
    const [selected,setselected]=useState()
     const filters = ["All", "Documents", "FAQ", "Attachment"]

  return (
    <div className='filtercontainer'>
        {filters.map((item)=>(<div key={item} className={selected==item?"filter_active":"notactive"}  onClick={() => setselected(item)}>
{item}
        </div>))}
      
    </div>
  )
}

export default Filterbuttons
