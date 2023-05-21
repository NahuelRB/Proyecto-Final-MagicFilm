import React from "react";
import Layout from "../components/layout/Layout";
import SearchMoviesContainer from "../components/common/searchMovies/SearchMoviesContainer";
import RecommendedMoviesContainer from "../components/common/recommendedMovies/RecommendedMoviesContainer";

const Home = () => {
  return (
    <Layout>
      <>
        <SearchMoviesContainer />
        <RecommendedMoviesContainer />
      </>
    </Layout>
  );
};

export default Home;
