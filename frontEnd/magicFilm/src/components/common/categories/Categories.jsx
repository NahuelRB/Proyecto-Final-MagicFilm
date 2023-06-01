import "./categories.css";
import { Link } from "react-router-dom";
import { getCategories } from "../../../service/productServices";
import { useEffect, useState } from "react";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const cat = getCategories().then((res) => {
      console.log(res.data);
      setCategories(res.data.filter((category) => category.id !== "0"));
    });
  }, []);
  return (
    <>
      <div className="container-categories">
        <div className="container-images">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`}>
              <img className="zoom" src={category.zoom} alt={category.title} />
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-menu">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`}>
            <img src={category.logo} alt={category.title} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
