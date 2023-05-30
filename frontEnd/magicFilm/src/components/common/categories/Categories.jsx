import "./categories.css"
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <>
        <div className='container-categories'>
            <div className='container-images'>
                <Link to={`/category/${2}`}>
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978863/Estrenos_etsgfy.png" alt="estrenos"/>
                </Link>
                <Link to={`/category/${3}`}>
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978919/Preventa_p2hofm.png" alt="películas en preventa"/>
                </Link> 
                <Link to={`/category/${1}`}>
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978967/Cartelera_eerfch.png" alt="películas en cartelera"/>
                </Link>
                <Link to={`/category/${4}`}>
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684979172/Promociones_h5tjv8.png" alt="promociones"/>
                </Link>      
            </div>
        </div>
        <div className='nav-menu'>
            <Link to={`/category/${2}`}>
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Estrenos_l0gwwa.png" alt="estrenos"/>
            </Link>
            <Link to={`/category/${3}`}>
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Preventa_mcttwl.png" alt="películas en preventa"/>
            </Link>
            <Link to={`/category/${1}`}>
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Cartelera_iw60vx.png" alt="películas en cartelera"/>
            </Link>
            <Link to={`/category/${4}`}>
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684977985/promocionesMobile_jyofic.png" alt="promociones"/>
            </Link>            
        </div>

        </>
    )
}

export default Categories