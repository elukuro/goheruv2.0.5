import Header from "../components/header";
import Footer from "../components/footer";
import { NavContextProvider } from "../context/navContext";
const DefaultLayout = (props: { children: any }) => {
  return (
    <>
      <NavContextProvider>
        <Header />
        <div className="container">{props.children}</div>
        <Footer />
      </NavContextProvider>
    </>
  );
};

export default DefaultLayout;
