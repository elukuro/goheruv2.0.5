import Header from "../components/header";
import Footer from "../components/footer";

const DefaultLayout = (props: { children: any; }) => {
  return(
    <>
      <Header/>
        <div className="container">
          {props.children}
        </div>
      <Footer/>
    </>
  )
}

export default DefaultLayout;
