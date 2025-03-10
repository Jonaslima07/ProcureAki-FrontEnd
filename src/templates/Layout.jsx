import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
     <Header/>
      <Container>
        <main>
        <Outlet></Outlet>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
