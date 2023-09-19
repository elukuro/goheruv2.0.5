import plant from "../assets/images/pencil.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer__text">Craft with love and lot of tea (not a coffe person sorry)</p>
        <img src={plant} alt="plant" className="footer__image" />
      </div>
    </>
  );
};

export default Footer;
