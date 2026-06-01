import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Nav from '../Components/Nav'
import Search from '../Components/Search'
import Filterbuttons from '../Components/Filterbuttons'

const Contentsearchpage = () => {

  const [documents, setDocuments] = useState([])
  const [faqs, setFaqs] = useState([])
  const [Searching, setsearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true)

        // Documents

        const docResponse = await fetch(
          "https://dummyjson.com/products"
        )

        const docData = await docResponse.json()

        setDocuments(docData.products)

        // FAQs

        const faqResponse = await fetch(
          "https://dev.to/api/articles?tag=react"
        )

        const faqData = await faqResponse.json()

        setFaqs(faqData)

        setLoading(false)

      }

      catch (err) {

        console.log(err)

        setLoading(false)

      }

    }

    fetchData()

  }, [])

  const filteredDocuments = documents.filter((item) =>
    item.title
      .toLowerCase()
      .includes(Searching.toLowerCase())
  )

  const filteredFaqs = faqs.filter((item) =>
    item.title
      .toLowerCase()
      .includes(Searching.toLowerCase())
  )

  if (loading) {
    return <h1 style={{ color: "white" }}>Loading...</h1>
  }

  return (

    <div style={{ display: "flex" }}>


      <Sidebar />

      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#0d1117",
          minHeight: "100vh",
          color: "white"
        }}
      >

        <Nav />

        <Search
          Searching={Searching}
          setsearch={setsearch}
          />

        <h2 style={{ marginTop: "30px" }}>
          📄 Document Results
        </h2>
        <Filterbuttons/>

        {
          
          filteredDocuments.map((item) => (

            <div
              key={item.id}
              style={{
                border: "1px solid #30363d",
                margin: "10px 0",
                padding: "15px",
                borderRadius: "10px"
              }}
            >     <span
                style={{
                  backgroundColor: "#1f6feb",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
              >
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p style={{fontFamily:"math" ,fontWeight:"lighter",color:"rgb(139, 148, 158)"              
              }}>{item.description}</p>

         

            </div>

          ))

        }

        <h2 style={{ marginTop: "40px" }}>
          ❓ FAQ Results
        </h2>

        {

          filteredFaqs.map((item, index) => (

            <div
              key={index}
              style={{
                border: "1px solid #30363d",
                margin: "10px 0",
                padding: "15px",
                borderRadius: "10px"
              }}
            >

              <h3>
                What is {item.title}?
              </h3>

              <p>
                {item.description ||
                  "No Description Available"}
              </p>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default Contentsearchpage