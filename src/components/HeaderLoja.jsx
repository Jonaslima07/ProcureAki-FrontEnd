import { Navbar, Container, Nav } from "react-bootstrap";

const HeaderLoja = () => {
  return (
    <Navbar style={headerStyle} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={textoProcureAk}>
          ProcureAki
          <img
            src="/img/locationwhite2.png"
            alt="locationwhiteicon"
            className="img-fluid"
            style={Locationwhite}
          />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="/" style={greetingStyle}>
            
            
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderLoja;

const headerStyle = {
  backgroundColor: "#006D77",
  padding: "20px 40px",
};

const greetingStyle = {
  fontWeight: 500,
  fontSize: "30px",
  color: "white",
  whiteSpace: "nowrap",
  marginRight: "13rem",
  display: "flex",
  alignItems: "center",
  gap: "10px", // Espaço entre texto e ícone
};

const textoProcureAk = {
  fontSize: "29px",
  color: "white",
  fontWeight: 500,
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "7px", // Espaço entre texto e ícone
};

const Locationwhite = {
  width: "33px",
  height: "33px",
};

// const CasaIcon = {
//   width: "47px",
//   height: "45px",
// };
