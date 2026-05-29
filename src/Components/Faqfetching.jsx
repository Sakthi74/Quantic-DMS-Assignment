import React, { useEffect, useState } from 'react'

const Faqfetching = () => {

  const [newsData, setNewsData] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

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

        setLoading(false)

      }

      catch (err) {

        console.log(err)

        setError("Failed to Fetch News")

        setLoading(false)

      }

    }

    fetchNews()

  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (

    <div>

     

      {

        newsData.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid #30363d",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
              color:'white',
              display:'flex',
              justifyContent:'space-between',
              fontWeight:'bold',
            }}
          >

<div>
            

            <h2>What is  the {item.title}?</h2>

            <p>{item.description}</p>
            </div>



<p className={`faqcolor ${item.type_of.toLowerCase()}`}>
  {item.type_of}
</p>
          </div>

        ))

      }

    </div>

  )

}

export default Faqfetching