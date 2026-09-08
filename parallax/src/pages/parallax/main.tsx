import './parallax.css'
import Mountain from '../../assets/mountain-removebg-preview.png'

function Parallax() {
    
    return (
        <div className="parallax-outer">
            <h1 className='title'> Parallax</h1>
            <img src={Mountain} alt='Mountainha' className='montanha'/>
        </div>
    )
}

export default Parallax;