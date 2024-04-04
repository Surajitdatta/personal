

import React, { useEffect, useState, useRef } from 'react';
import { SiCodeproject } from 'react-icons/si';
import { BsCup } from 'react-icons/bs';
import { FaLaughBeam } from 'react-icons/fa'; 
import './stats.css';

const Stats = () => {
    const [scrollValue, setScrollValue] = useState();
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return; // Check if ref is assigned
            if (window.scrollY > 550) {
                if (window.innerWidth < 765) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '50px';
                }
            } else if (window.scrollY > 253) {
                if (window.innerWidth > 769 && window.innerWidth < 985) {
                    scrollRef.current.style.transition = '1s';
                    scrollRef.current.style.marginTop = '50px';
                }
            } else if (window.scrollY > 85) {
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
        <div className="stats" ref={scrollRef}>
            <div className="statsDiv">
                <div className="statsIcon">
                    <SiCodeproject />
                </div>
                <div className="statsContent">
                    4{scrollValue}
                    <br />
                    Projects Completed
                </div>

                <div className="statsIcon">
                    <BsCup />
                </div>
                <div className="statsContent">
                    500
                    <br />
                    Coffee
                </div>

                <div className="statsIcon">
                    <FaLaughBeam /> {/* Changed the icon component to FaLaughBeam */}
                </div>
                <div className="statsContent">
                    100%
                    <br />
                    Enjoyment
                </div>
            </div>
        </div>
    );
};

export default Stats;
