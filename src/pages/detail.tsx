import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./../style/pages/article.scss";

const Detail = () => {
  const [markdown, setMarkdown] = useState("");

  const generateData = async () => {
    const file = await import("../article/01-use-no-var-anymore.md");
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
      <div className="article">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default Detail;
