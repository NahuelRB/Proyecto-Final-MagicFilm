import React from "react";
import Layout from "../components/layout/Layout";
import SearchMoviesContainer from "../components/common/searchMovies/SearchMoviesContainer";
import RecommendedMoviesContainer from "../components/common/recommendedMovies/RecommendedMoviesContainer";
import CategoriesContainer from "../components/common/categories/CategoriesContainer";

const Home = () => {
  return (
    <Layout>
      <SearchMoviesContainer />
      <CategoriesContainer />
      <RecommendedMoviesContainer />
    </Layout>
  );
};

export default Home;
