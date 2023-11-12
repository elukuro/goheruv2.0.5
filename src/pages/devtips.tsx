/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from "react-router-dom";
import { useState } from "react";
import "./../style/pages/devtips.scss";
// import { articleListData } from "../article";

const articles = import.meta.glob("../../public/article/*.md", { eager: true, import: "default" });

const RenderArticleList = ({ reverse }: { reverse: any }) => {
  let articleListData = Object.keys(articles);
  if (reverse) {
    articleListData = articleListData.reverse();
  }
  const createLink = (link: any) => {
    return `${link.replace("../../public/article/", "").replace(".md", "")}`;
  };

  return articleListData.map((article: any, index) => {
    return (
      <>
        <div className="devtips__list">
          <Link to={createLink(article)}>
            <span>Tips {index + 1}:</span>{" "}
            <p>{createLink(article).split("-").join(" ").replace(/[0-9]/g, "")}</p>
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
