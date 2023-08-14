import "./../style/pages/homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <h1>Hello,</h1>
        <p>
          I'am Heru, <b>Frontend Developer based in Jakarta</b>, I have years experience mostly in
          e-commerce industry. Sometimes I write about web development and devtips in <b>#DevTo </b>
          Community
        </p>
        <p>
          Beside coding I also run as my <b>"cheap therapy"</b> for my zombie life every weekday, I
          also love to read books mostly non fiction.
        </p>
        <p>You can find me on social media </p>
        <ul className="homepage__social-media">
          <li>
            <a href="https://twitter.com/goheru_" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://goheru.medium.com" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </li>
          <li>
            <a href="https://github.com/elukuro" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/heru-hartanto-618b575b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:heruhartanto110291@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Homepage;
