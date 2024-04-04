
import React, { useEffect, useState, useRef } from 'react';
import { MdCastForEducation } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import './experience.css';

const Experience = () => {
    const [scrollValue, setScrollValue] = useState();
    const scrollRef = useRef(null);
    console.log(window.scrollY)
    useEffect(() => {
        console.log(window.scrollY)
        const handleScroll = () => {
            if (!scrollRef.current) return; // Check if ref is assigned
            if (window.scrollY > 1900) {
                if (window.innerWidth < 765) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '50px';
                    // console.log(window.scrollY)
                    // console.log(window.innerWidth)
                }
            } else if (window.scrollY > 998) {
                if (window.innerWidth > 769 && window.innerWidth < 985) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '0px';
                    // console.log(window.scrollY)
                    // console.log(window.innerWidth)
                }
            } else if (window.scrollY > 600) {
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
        <>
            <div className="exp" id="experience" ref={scrollRef}>
                <div className="expContent">
                    <h2>Education & Experience</h2>
                    
                </div>
                <div className="expCard">
                    <div className="eduCard">
                        {/* Secondary Education */}
                        <div className="year">
                            <div className="eduIcon">
                                <MdCastForEducation />
                            </div>
                            <div className="eduYear">
                                <b> Passout - 2017</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>Secondary Education</span><br /><br />
                                <small><p>I have completed my secondary education in 2017 .</p></small>
                            </div>
                        </div>

                        {/* Diploma (Mechanical) */}
                        <div className="year">
                            <div className="eduIcon">
                                <MdCastForEducation />
                            </div>
                            <div className="eduYear">
                                <b> Passout - 2020</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>Diploma (Mechanical)</span><br /><br />
                                <small><p>I have completed my diploma engineering in 2020 .</p></small>
                            </div>
                        </div>

                        {/* Btech */}
                        <div className="year">
                            <div className="eduIcon">
                                <MdCastForEducation />
                            </div>
                            <div className="eduYear">
                                <b> Passout - 2023</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>Btech</span><br /><br />
                                <small><p>I have completed my Btech in engineering in 2023.</p></small>
                            </div>
                        </div>
                    </div>

                    {/* Skill Card */}
                    <div className="skillCard">
                        <div className="year">
                            <div className="eduIcon">
                                <GiSkills />
                            </div>
                            <div className="eduYear">
                                <b> 01/10/2022 - 10/10/2023</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>Software Developer Intern (JSpiders)</span><br /><br />
                                <small><p>Got trained in SDLC, Oracle-SQL, Core Java, Manual Testing & Web Technology.</p></small>
                            </div>
                        </div>

                        <div className="year">
                            <div className="eduIcon">
                                <GiSkills />
                            </div>
                            <div className="eduYear">
                                <b> 10/2023 - Present</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>JR Software Engineer (Accelon Technologies Pvt Ltd.)</span><br /><br />
                                <small>
                                    <ul>
                                        <li>Writing and maintaining code</li>
                                        <li>Working on minor bug fixes.</li>
                                        <li> Working on XAML, C#, MS SQL Server, developing softwares similar to SAP B1</li>
                                        
                                    </ul>
                                
                                    
                                    
                                    
                                    </small>
                            </div>
                        </div><br/><br/>

                        <div className="year">
                            <div className="eduIcon">
                                <GiSkills />
                            </div>
                            <div className="eduYear">
                                <b>08/2021 - 10/2021</b>
                            </div>
                        </div>
                        <div className="eduContent">
                            <div className="stapper"></div>
                            <div className="stapperContent">
                                <span>Graphic Design</span><br /><br />
                                <small><p>Maintained an updated design style allowing the company to scale to client and increase their revenue.</p></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
