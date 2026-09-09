import './parallax.css'
import Mountain from '../../assets/mountain-removebg-preview.png'
import Moon from '../../assets/moon.jpg'
import Sun from '../../assets/sun.png'

import { useEffect, useState } from 'react';

function Parallax() {
    const [isOn, setIsOn] = useState(false);
    const [dark, setDark] = useState(false);
    const toggleMode = () => {setDark(!dark)
    }

        const [scrolling, setScroll] = useState(false);
        useEffect(() => {
            console.log("Scroll atual:", window.scrollY);
            const handleScroll = () => {
            if (window.scrollY > 60) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        
        <div className={` ${dark ? 'parallax-alt' : 'parallax-outer'}`}>
            <button onClick={toggleMode} className={`btn-on ${dark ? 'off' : ''}`}> {dark ? '☀️' : '🌑'} </button>
            <img src={dark ? Sun : Moon} alt='Moonzinha' className={`lua ${scrolling ? 'scroll' : ''} ${dark ? 'Sun' : ''}`}/>
            <h1 className={`title ${scrolling ? 'scroll' : ''}`}> Parallax</h1>
            <img src={Mountain} alt='Mountainha' className='montanha'/>
            {/* <img src={Mountain2} alt='Mountainha2' className='montanha'/> */}
            <div className={`groupmini${dark ? '' : ''}`}>
                <div className='mini' > 
                    <h1 className='text'>
                    Aqui você pode ver um exemplo de hover: um item que permite dar mais foco para a sua mensagem
                    </h1></div>
                <div className='mini'></div>
                <div className='mini'></div>
            </div>
            <h1> oiii </h1>
            <h1> oiii </h1>
        </div>
    )
}

export default Parallax;