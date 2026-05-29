    import React from 'react'
    import "../Styles/searchbar.css"
    const Search = ({Searching,setsearch}) => {
        function handlechange(e){
            setsearch(e.target.value)

        }
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <input type="text" placeholder='🔍  Search Documents...' className='searchbar' onChange={handlechange}/>
            <div className='tablegrid'>
                <div className='tableg'>TABLE</div>
                <div className='tgrid'>GRID</div>
            </div>
        
        </div>
    )
    }

    export default Search
