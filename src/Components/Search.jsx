import { useState,React } from "react"

import "../Styles/searchbar.css"

const Search = ({ Searching, setsearch, placeholder }) => {
  const [select, setselect] = useState("TABLE")
  const [searchhistory, setsearchhistory] = useState(["Billing", "Account", "Product", "Technical"])
  
const [showHistory, setShowHistory] = useState(false);

  function handlechange(e) {
    setsearch(e.target.value)
     if (value && !searchhistory.includes(value)) {
      setsearchhistory(prev => [...prev, value]) // adds to history on type
    }
  }

  return (
    <div style={{ display:'flex', justifyContent:'space-between' }}>
      <input
        type="text"
        placeholder={placeholder || "🔍 Search..."}
        className='searchbar'
        onChange={handlechange}
        onFocus={()=>setShowHistory(true)}
      />
      {
 showHistory && Searching === "" &&
 searchhistory.map((item,index)=>(
   <p key={index}>{item}</p>
 ))
}

      <div className='tablegrid'>
        <p className="bars"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</p>
        <div className={`tableg ${select==="TABLE"? "tableg": "tgrid"}`} onClick={()=>setselect("TABLE")} >TABLE</div>
        <div className={`tableg ${select==="GRID"? "tableg": "tgrid"}`}onClick={()=>setselect("GRID")}>GRID</div>
      </div>
    </div>
  )
}

export default Search