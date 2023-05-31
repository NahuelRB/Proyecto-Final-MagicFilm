import React, { useEffect, useState } from "react";
import RecommendedMovies from "./RecommendedMovies";
import "./RecommendedMovies.css";
import { getMovies } from "../../../service/productServices";
import { Pagination } from "@mui/material";



const RecommendedMoviesContainer = () => {
  const [dataMovies, setDataMovies] = useState([]);

 useEffect(() => {
  const movies = getMovies();
    movies
      .then((res) => setDataMovies(res.data))
      .catch((error) => console.log(error));

 },[])


 //Cambio aleatorio del elementos del array
 
 dataMovies.sort(function() { return Math.random() - 0.5 });



  return (
    <div>
      <h2 className="titleRecommendedMovies">Películas Recomendadas</h2>
      <RecommendedMovies 
      dataMovies={dataMovies}
       />

       <div style={{display:"flex",justifyContent:"center"}}>
        <Pagination count={2} variant="outlined" color="primary"/>
        </div>
    </div>
    
  );
};

export default RecommendedMoviesContainer;
