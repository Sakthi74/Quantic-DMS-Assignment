  import React, { useEffect, useState } from 'react'
  import Search from './Search'
  import "../Styles/Faqfetch.css"
import { useContext } from "react";
import { Countcontext } from "../Context/Countcontext";
  const Faqfetching = ({ Searching }) => {

    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [dropdown,setdropdown]=useState(null)
    const { setFaqCount } =
useContext(Countcontext);
console.log(setFaqCount);

    useEffect(() => {

      const fetchNews = async () => {

        try {

          setLoading(true)

          const response = await fetch(
            "https://dev.to/api/articles?tag=react"
          )

          const data = await response.json()

          console.log(data)

          setNewsData(data)
          setFaqCount(data.length)
          console.log("Data length:", data.length)

          setLoading(false)

        } catch (err) {

          console.log(err)

          setError("Failed to Fetch FAQs")

          setLoading(false)

        }

      }

      fetchNews()

    }, [setFaqCount])
    const num = newsData.length


  const filteredFaqs = newsData.filter((item) =>
    item.title &&
    item.title.toLowerCase().includes((Searching || "").toLowerCase())
  )

    if (loading) {
      return <h1 style={{ color: "white" }}>Loading...</h1>
    }

    if (error) {
      return <h1>{error}</h1>
    }

    return (

      <div>
      

        {

          filteredFaqs.map((item, index) => (

            <div className='overallfetch'
              key={index}
              style={{
                border: "1px solid #30363d",
                margin: "20px",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }} onClick={ ()=> setdropdown(dropdown===index? null:index)}
            >

              <div>

                <h2 className='itemtitle'>
                  {dropdown === index ? "▼" : "▶"}
                  What is {item.title}?
                </h2>
                {dropdown === index &&(

                <p className='itemdesc'>
                  {item.description || "No Description Available"}
                </p>)}

              </div>

              <p className="faqcolor">
              Faq
              </p>

            </div>

          ))

        }

      </div>

    )

  }

  export default Faqfetching