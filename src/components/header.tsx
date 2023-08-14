import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavContext } from "../context/navContext";
const Header = () => {
  const header = [
    {
      name: "home",
      link: "/",
    },
    // {
    //   name: "notes",
    //   link: "notes",
    // },
    {
      name: "devtips",
      link: "/devtips",
    },
    // {
    //   name: "book",
    //   link: "#book"
    // }
  ];
  const { activeNav, setActiveNav } = useContext(NavContext);
  const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const RenderList = () => {
    return header.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link} className={`${activeNav === item.link ? "active" : ""}`}>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <div className="header">
        <ul className="header__nav">
          <RenderList />
        </ul>
      </div>
    </>
  );
};

export default Header;
