import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./../style/pages/article.scss";

const Detail = () => {
  const [markdown, setMarkdown] = useState("");

  const { title } = useParams();

  const generateData = async () => {
    const file = await import(`../../public/article/${title}.md`);
    const response = await fetch(file.default)
      .then((res) => res.text())
      .then((text) => text);
    const write = response;
    setMarkdown(write);
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <>
      <Link to="/devtips">Back</Link>
      <div className="article">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default Detail;
