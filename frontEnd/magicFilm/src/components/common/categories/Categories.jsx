import "./categories.css"

const Categories = () => {
    return (
        <>
        <div className='container-categories'>
            <div className='container-images'>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978863/Estrenos_etsgfy.png" alt="estrenos"/>
                </a>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978919/Preventa_p2hofm.png" alt="películas en preventa"/>
                </a>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978967/Cartelera_eerfch.png" alt="películas en cartelera"/>
                </a>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684979172/Promociones_h5tjv8.png" alt="promociones"/>
                </a>      
            </div>
        </div>
        <div className='nav-menu'>
        <a href="#">
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Estrenos_l0gwwa.png" alt="estrenos"/>
            </a>
            <a href="#">
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Preventa_mcttwl.png" alt="películas en preventa"/>
            </a>
            <a href="#">
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Cartelera_iw60vx.png" alt="películas en cartelera"/>
            </a>
            <a href="#">
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Cartelera_iw60vx.png" alt="películas en cartelera"/>
            </a>
            <a href="#">
                <img src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684977985/promocionesMobile_jyofic.png" alt="promociones"/>
            </a>            
        </div>

        </>
    )
}

export default Categories