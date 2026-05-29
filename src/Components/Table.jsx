import React from 'react'
import "../Styles/Table.css"

const Table = ({ id,title,description,category,price}) => {
  return (
    <>
      <tr >
                <td className='tbodyid'>#D100{id}</td>
                <td className='tbodytitle'>📁 {title}</td>
                <td className='tbodydescription'>{description}</td>
                <td className={`tbodycategory ${category.toLowerCase()}`}>{category}</td>
                <td className='tbodyprice'>{price}</td>
              </tr>
    </>
  )
}

export default Table