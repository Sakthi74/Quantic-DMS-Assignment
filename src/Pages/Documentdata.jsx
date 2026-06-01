import React, { useEffect, useState } from 'react'
import Table from '../Components/Table'
import Search from '../Components/Search'
import Nav from '../Components/Nav'
import Filterbuttons from '../Components/Filterbuttons'

const Documentdata = ({documentCount}) => {
    const[doucmentdata,setdocument]=useState([])
    const[getdocument,setpostdocument]=useState()
    const[loading,setloading]=useState(true)
    const[Searching,setsearch]=useState("")
    const[currentpage,setCurrentPage]=useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(5)
    
    
    useEffect(()=>{
        const fetchdocs = async ()=>{
            try{

            setloading(true)
            const data = await fetch("https://dummyjson.com/products")
            const jas = await data.json()
            setdocument(jas.products)
            console.log(jas)
            setdocumentcount(data)
            setloading(false)
            }

            catch(err){
                alert("NO DATA FETCHED")
            } 
        }
    fetchdocs()},[])

    const handleFileUpload = async (e) => {

  const file = e.target.files[0]

  if (!file) return

  const formData = new FormData()

  formData.append("document", file)

  try {

    const response = await fetch("/api/documents/upload", {

      method: "POST",

      body: formData

    })

    const result = await response.json()

    console.log(result)

    alert("Document Uploaded Successfully")

  }

  catch (err) {

    console.log(err)

    alert("Upload Failed")

  }

}



    const filteredUsers = doucmentdata.filter((user) =>
  user.title.toLowerCase().includes(Searching.toLowerCase())
)


const lastIndex = currentpage * recordsPerPage

const firstIndex = lastIndex - recordsPerPage

 const currentRecords = filteredUsers.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage)
  return (
    <>
    <div>
        <Nav handleFileUpload={handleFileUpload} />
       
       <Search data={Searching} setsearch={setsearch}/>
  <table>
    <thead>

      <tr>
        <th className='theadth'>ID</th>
        <th className='theadth'>TITLE</th>
        <th className='theadth'>DESCRIPTION</th>
        <th className='theadth'>CATEGORY</th>
        <th className='theadth'>PRICE</th>
      </tr>
    </thead>

    <tbody>{currentRecords.map((item) => (
        
      <Table  key={item.id} id={item.id}  title={item.title} description={item.description} category={item.category} price={item.price}/>
      ))}
    </tbody>
  </table>
    <div className='pagination'>

  <h4 className='selectperpage'>Select</h4>
    <select

          value={recordsPerPage}

          onChange={(e) => {

            setRecordsPerPage(Number(e.target.value))

            setCurrentPage(1)

          }}

        >

  <option value={5}>5</option>

  <option value={10}>10</option>

  <option value={25}>25</option>

  <option value={50}>50</option>

</select> <h4 className='selectperpage'>Per page</h4></div>
<div style={{ marginTop: "20px" }}>

          {

            [...Array(totalPages)].map((_, index) => (

              <button

                key={index}

                onClick={() => setCurrentPage(index + 1)}

                style={{

                  margin: "5px",

                  padding: "8px 12px",

                  backgroundColor:

                    currentpage === index + 1 ? "teal" : "lightgray",

                  color:

                    currentpage === index + 1 ? "white" : "black",

                  border: "none",

                  cursor: "pointer"

                }}

              >

                {index + 1}

              </button>

            ))

          }
</div>
</div>
    </>
  )
}

export default Documentdata
