
import React, { useEffect, useState, useRef } from 'react';
import './service.css';

const Service = () => {
    const [lists, setLists] = useState([
        { name: 'UI Design', des: 'Created user-friendly designs to make websites and apps easy to use. Used creativity and attention to detail to make interfaces look good and work well.', image: 'https://cdn.dribbble.com/users/427857/screenshots/6321392/attachments/1353611/presentation-ui_designer-illustration-by_tranmautritam.png' },
        
        { name: 'Java Full Stack', des: 'As a Java Full Stack developer, I have experience in both front-end and back-end development using Java technologies such as Spring Boot. I am proficient in building APIs, implementing authentication and authorization. ', image: 'https://2.bp.blogspot.com/-h-14HBp0qhM/Wz9AE2rWijI/AAAAAAAAClQ/sqE9WhcETsMOQiuwv6UtLAcg3KpmZCgLACLcBGAs/s1600/java_tech.jpg' },
        { name: 'SQL', des: 'As an SQL expert, I have a strong understanding of database management systems and SQL queries. I am skilled in designing and optimizing database schemas, writing complex SQL queries for data manipulation and retrieval, and ensuring data integrity and security.', image: 'https://i.pinimg.com/originals/27/45/30/2745305c9702bceee2525cc24e1d00c2.png' },
        { name: 'Graphic Design', des: 'As a graphic designer, I am proficient in using design software such as Adobe Photoshop, Illustrator, and InDesign. I have experience in creating visually appealing graphics, illustrations, and layouts for various digital and print media, adhering to brand guidelines and client requirements.', image: 'https://clipart-library.com/images/rcnr6RXei.jpg' }
      
        
    ]);

    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            if (window.scrollY > 800) {
                if (window.innerWidth < 765) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '50px';
                }
            } else if (window.scrollY > 400) {
                if (window.innerWidth > 769 && window.innerWidth < 985) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '50px';
                }
            } else if (window.scrollY > 300) {
                if (window.innerWidth > 992 && window.innerWidth < 1900) {
                    scrollRef.current.style.transition = '2s';
                    scrollRef.current.style.marginTop = '50px';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="serviceMain" id="service" ref={scrollRef}>
            <div className="serviceContent">
                <h2>Services</h2>
            </div>
            <div className="serviceCard">
                {lists.map((val, index) => (
                    <div key={index} className="card">
                        <div className="cardImg">
                            <img src={val.image} alt={val.name} height="30px" width="30px" />
                        </div>
                        <div className="cardName">{val.name}</div>
                        <div className="cardDes">
                            <p>{val.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
