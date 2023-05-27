import React from "react";
import AddMovieContainer from "../../common/addMovie/AddMovieContainer";
import DeleteMovieContainer from "../../common/deleteMovie/DeleteMovieContainer";

const AdminPanel = () => {
  return (
    <div>
      <AddMovieContainer/>
      <DeleteMovieContainer/>
    </div>
  );
};

export default AdminPanel;
