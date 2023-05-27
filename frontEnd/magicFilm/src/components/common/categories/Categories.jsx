import "./categories.css"

const Categories = () => {
    return (
        <>
        <div className='container-categories'>
            <div className='container-images'>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684370572/estrenos_hish13.jpg" alt="estrenos"/>
                </a>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684370572/preventa_qarwow.jpg" alt="películas en preventa"/>
                </a>
                <a href="#">
                    <img className="zoom" src="https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684370573/cartelera_fed7av.jpg" alt="películas en cartelera"/>
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
         </div>

         </>
    )
}

export default Categories