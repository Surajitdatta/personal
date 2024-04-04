import React from 'react'
import "./pagination.css";
import { useState } from 'react';
import { image } from '../../graphics/json';
import Mypagination from './Mypagination';
// import img1 from "../works/img1.png";
import img1 from "../../works/img1.png"
import img2 from "../../works/img2.png";
import img3 from "../../works/img3.png";
import img4 from "../../works/img4.png";
import img5 from "../../works/img5.png";
import img6 from "../../works/img6.png";
import img7 from "../../works/img7.png";
import img8 from "../../works/img8.png";
import img9 from "../../works/img9.jpeg";
import img10 from "../../works/img10.png";
import img11 from "../../works/img11.png";
import img12 from "../../works/img12.png";
import img13 from "../../works/img13.png";
import img14 from "../../works/img14.png";
import img15 from "../../works/img15.png";
import img16 from "../../works/img16.png";
import img17 from "../../works/img17.png";
import img18 from "../../works/img18.png";
import img19 from "../../works/img19.png";
import img20 from "../../works/img20.png";
import img21 from "../../works/img21.png";
import img22 from "../../works/img22.png";
import img23 from "../../works/img23.png";
import img24 from "../../works/img24.png";
import img25 from "../../works/img25.png";
import img26 from "../../works/img26.png";
import img27 from "../../works/img27.png";
import img28 from "../../works/img28.png";
const Pagination = () => {
  const[currentPage, setCurrentPage] = useState(1)
  const[items, setItems] = useState(
    [
      { img: img1, title: "Creative Typography Design", description: "Explore unique typography design concepts that push the boundaries of creativity." },
      { img: img2, title: "Minimalist Logo Design", description: "Discover the power of simplicity with minimalist logo designs that make a lasting impact." },
      { img: img3, title: "Illustrative Poster Design", description: "Delve into the world of illustrative poster design and learn how to convey messages through visuals." },
      { img: img4, title: "Branding Identity Design", description: "Master the art of branding identity design and create cohesive brand experiences across all touchpoints." },
      { img: img5, title: "Web UI/UX Design", description: "Learn about the principles of user interface and user experience design for effective web experiences." },
      { img: img6, title: "Digital Illustration Techniques", description: "Unlock your creativity with digital illustration techniques and bring your ideas to life." },
      { img: img7, title: "Packaging Design Concepts", description: "Discover innovative packaging design concepts that captivate consumers and stand out on shelves." },
      { img: img8, title: "Photomanipulation Artistry", description: "Explore the art of photomanipulation and create surreal and captivating digital artworks." },
      { img: img9, title: "Vector Art Creation", description: "Learn the essentials of vector art creation and create scalable graphics for various applications." },
      { img: img10, title: "Editorial Layout Design", description: "Explore editorial layout design principles and create visually appealing magazine spreads." },
      { img: img11, title: "Icon Design Mastery", description: "Master the craft of icon design and create intuitive and visually striking icons for digital platforms." },
      { img: img12, title: "Motion Graphics Animation", description: "Learn the fundamentals of motion graphics animation and create dynamic visuals for videos and presentations." },
      { img: img13, title: "Pattern Design Techniques", description: "Discover pattern design techniques and create eye-catching patterns for textiles, wallpapers, and more." },
      { img: img14, title: "Digital Painting Masterclass", description: "Refine your digital painting skills and create stunning artworks with realism and depth." },
      { img: img15, title: "Typography Animation Effects", description: "Explore typography animation effects and add dynamism and personality to your designs." },
      { img: img16, title: "Infographic Design Principles", description: "Learn about infographic design principles and effectively communicate complex information through visuals." },
      { img: img17, title: "Visual Identity Design", description: "Craft memorable visual identities that communicate the essence of brands and leave a lasting impression." },
      { img: img18, title: "Character Design Essentials", description: "Master the essentials of character design and create compelling characters for animations, games, and comics." },
      { img: img19, title: "Logo Animation Techniques", description: "Animate your logo designs and create engaging brand animations that leave a lasting impact." },
      { img: img20, title: "Interactive Web Design", description: "Dive into interactive web design concepts and create engaging online experiences that captivate users." },
      { img: img21, title: "Color Theory for Designers", description: "Explore color theory principles and learn how to use color effectively in your designs to evoke emotions and convey messages." },
      { img: img22, title: "Typography Hierarchy Mastery", description: "Master typography hierarchy and create visually balanced and easy-to-read designs." },
      { img: img23, title: "Poster Design Composition", description: "Learn about poster design composition and create visually striking compositions that grab attention and communicate effectively." },
      { img: img24, title: "Digital Art Brush Techniques", description: "Explore digital art brush techniques and discover new ways to add texture and depth to your digital artworks." },
      { img: img25, title: "Iconography Design Principles", description: "Understand iconography design principles and create intuitive icons that effectively communicate concepts and actions." },
      { img: img26, title: "Photography Composition Tips", description: "Enhance your photography compositions with expert tips and techniques for capturing stunning images." },
      { img: img27, title: "Web Typography Best Practices", description: "Discover web typography best practices and create readable and visually appealing text layouts for websites." },
      { img: img28, title: "Digital Drawing Techniques", description: "Learn digital drawing techniques and elevate your digital artworks with precision and detail." }
  ]
  )
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage; //calculating index no here
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)



  return (
    <div className='pagination'>
      {
        // currentItems.map((v, i)=>(<div key={i}>{v}</div>))
        currentItems.map((v,i)=>{
          <div key={i}>
            {v}

          </div>
        })
      }
      <Mypagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currItems={currentItems}
      />
    
    </div>
  )
}

export default Pagination