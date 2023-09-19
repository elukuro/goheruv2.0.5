import { Link } from "react-router-dom";
import "./../style/pages/devtips.scss";
import { articleList } from "../article";

const RenderArticleList = () => {
  return articleList.map((article, index) => {
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
  return (
    <>
      <div className="devtips">
        <h1>#DEVTIPS</h1>
        <RenderArticleList />
      </div>
    </>
  );
};

export default Article;
