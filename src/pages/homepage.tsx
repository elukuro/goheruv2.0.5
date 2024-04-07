import "./../style/pages/homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <h1>Hello, I'am Heru</h1>
        <p>
          <b>Jakarta 🌎 based Frontend Developer</b>, in my recent years of work, I've focused on
          build user-friendly e-commerce interfaces that make online shopping experience flawless
          🛒. Occasionally I'm write about web development and coding tips in{" "}
          <a href="https://dev.to/elukuro" target="_blank">
            <b>#DevTo</b>
          </a>{" "}
          Community.
        </p>
        <p>
          When I'm not coding 💻 you can find me hitting the pavement as a recreational runner 🏃
          It's my way to clear my head after battling rush hour commutes like a real-life zombie 🧟
          + 🚌 .
        </p>
        <p>
          To fuel my mind, I devour non-fiction books 📖 there's always something new to learn!.
        </p>
        <p>You can find me on social media </p>
        <ul className="homepage__social-media">
          <li>
            <a href="https://twitter.com/goheru_" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
          </li>
          {/* <li>
            <a href="https://goheru.medium.com" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </li> */}
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
          {/* <li>
            <a href="mailto:heruhartanto110291@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
