import React from 'react'
import { useParams } from 'react-router-dom';
import films from "../../../../films.json"



const MovieDetail = (props) => {
  let {filmid} =useParams
  const {dataMovies} =props;
  let filmselected =films.find(film => dataMovies.id===filmid)
  const {id,name,release_date, gender, summary,image,trailer} =filmselected;

  function obtenerIdVideoYoutube(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&.*)?$/;
    const match = url.match(regex);
  
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }
  

  const videoUrl = trailer;
  const videoId = obtenerIdVideoYoutube(videoUrl);

console.log(filmselected)

  return (
    <>
    <div className='container-detail-movies'>


      <div>
        <table>
          <tr>{name}</tr>
          <tr>{release_date}</tr>
          <tr>
            <td>{summary}</td>
          </tr>
          <tr>
        
        <td><img src={image} alt="" className=" img-detail-movies" /></td>
        <td></td>
      </tr>
      
    </table>
    </div>
   
    <div>
    <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Trailer"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    </div>
    
      
    </>
    
  )
}

export default MovieDetail

