import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Article = () => {
  return (
    <>
      <p>devtips</p>
      <Link to={"/devtips/article"}>article</Link>
    </>
  );
};

export default Article;
