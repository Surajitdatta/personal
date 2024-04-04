

import React, { useEffect, useState, useRef } from 'react';
import './projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([
        { name: "View", des: "A todo app, which is use to use to add, remove and edit task.", img: "https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png", technology: "Java & SQL", hide: "https://cdni.iconscout.com/illustration/premium/thumb/sql-developer-5734394-4799748.png", link: "http://Www.tractoapp.com/twcpl" },
        { name: "View", des: "This weather app is use to get weather details by searching place. Data will come from API.", img: "https://assets.website-files.com/5f0a234d1293a2f4eb599bb5/60176e33710fdf691a6db05d_PNG-20-p-800.png", technology: "Java & SQL", hide: "https://cdni.iconscout.com/illustration/premium/preview/programmer-working-on-web-development-on-computer-5682760-4731021.png", link: "http://Www.tractoapp.com/GlasXperts" },
    ]);

    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                if (window.scrollY > 3100) {
                    if (window.innerWidth < 765) {
                        scrollRef.current.style.transition = '1s';
                        scrollRef.current.style.marginTop = '50px';
                    }
                } else if (window.scrollY > 1500) {
                    if (window.innerWidth > 769 && window.innerWidth < 985) {
                        scrollRef.current.style.transition = '1s';
                        scrollRef.current.style.marginTop = '50px';
                    }
                } else if (window.scrollY > 1350) {
                    if (window.innerWidth > 992 && window.innerWidth < 1900) {
                        scrollRef.current.style.transition = '2s';
                        scrollRef.current.style.marginTop = '50px';
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='projects' id="projects" ref={scrollRef}>
            <div className="projectsContent">
                <h2>Projects</h2>
            </div>
            <div className='projectsCard'>
                {projects.map((val, index) => (
                    <div key={index} className='projectCard'>
                        <div className="hide">
                            <div className='hideImg'>
                                <img src={val.hide} alt="Project Hide" height="100%" width="100%" />
                            </div>
                        </div>
                        <div className='projectImg'>
                            <img src={val.img} alt={val.name} height="100%" width="100%" />
                        </div>
                        <div className='projectTitle'>
                            <a href={val.link}>{val.name}</a>
                        </div>
                        {/* <div className='projectDes'>
                            {val.des}
                        </div> */}
                        <div className='tech'>
                            {val.technology}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
