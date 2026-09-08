import './parallax.css'
import Mountain from '../../assets/mountain-removebg-preview.png'
import { useEffect, useState } from 'react';

function Parallax() {
        const [scrolling, setScroll] = useState(false);
        useEffect(() => {
            console.log("Scroll atual:", window.scrollY);
            const handleScroll = () => {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <div className="parallax-outer">
            <h1 className={`title ${scrolling ? 'scroll' : ''}`}> Parallax</h1>
            <img src={Mountain} alt='Mountainha' className='montanha'/>
        </div>
    )
}

export default Parallax;