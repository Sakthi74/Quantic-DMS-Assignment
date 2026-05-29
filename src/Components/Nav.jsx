import React from 'react'
import "../Styles/Nav.css"
import { useNavigate  } from 'react-router-dom'

const Nav = ({ handleFileUpload }) => {
   
  return (
    <div>
      <nav>

        <h1>DOCUMENTS</h1>

        <label htmlFor="fileupload" className="uploadbtn">
          Upload Document +
        </label>

        <input
          id="fileupload"
          type="file"
          hidden
          onChange={handleFileUpload}
        />

      </nav>
    </div>
  )
}

export default Nav