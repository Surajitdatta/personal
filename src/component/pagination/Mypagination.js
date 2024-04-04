import React from 'react'
import { useState } from 'react';
import "./pagination.css"
const Mypagination = ({itemsPerPage , totalItems , paginate , currItems}) => {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
      }
      const handleClick = (number) => {
        setCurrentPage(number);
        paginate(number);
        console.log(currItems)
      };
  return (
    <div >
        <div className='items'>
          {
            currItems.map((items)=>{
                return(
                    <div className='item'>
                      <img src={items.img} height="50px" width="50px"  /><br/>
                      {items.title}
                    </div>
                )
            })
          }

        </div>
        
        <div className='paginationPage'>
        <ul className=''>
          {pageNumbers.map(number => (
            <div key={number}>
                <li className='page-item' >
                <button onClick={() => handleClick(number)}  className='page-link'>
                {number}
                </button>
                </li>

            </div>
          
      ))}
       </ul>

        </div>
        

    </div>
  )
}

export default Mypagination