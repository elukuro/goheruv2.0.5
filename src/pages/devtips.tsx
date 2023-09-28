/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Link } from "react-router-dom";
import "./../style/pages/devtips.scss";
import { articleListData } from "../article";
import { useState } from "react";

const RenderArticleList = ({ reverse }) => {
  const data = articleListData(reverse);
  return data.map((article, index) => {
    return (
      <>
        <div className="devtips__list">
          <Link to={article}>
            <span>Tips {index + 1}:</span>{" "}
            <p>{article.split("-").join(" ").replace(/[0-9]/g, "")}</p>
          </Link>
        </div>
      </>
    );
  });
};
const Article = () => {
  const [isReverse, setReserve] = useState(true);
  return (
    <>
      <div className="devtips">
        <div className="devtips__header">
          <h1>#DEVTIPS</h1>
          <span onClick={() => setReserve(!isReverse)}>
            Sort: {isReverse ? "Oldest" : "Newest"}
          </span>
        </div>
        <RenderArticleList reverse={isReverse} />
      </div>
    </>
  );
};

export default Article;
