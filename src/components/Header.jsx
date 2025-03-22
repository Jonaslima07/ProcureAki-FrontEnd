import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar style={headerStyles.navbar} expand="lg">
        <Container fluid style={headerStyles.container}>
          <Navbar.Brand as={Link} to="/" style={headerStyles.brand}>
            ProcureAki
          </Navbar.Brand>
          <img
            src="https://s3-alpha-sig.figma.com/img/7b45/e801/23d69355f89fd96e98ec547f1403c355?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZNrcIcaupXBVoPXJ91dD2FW0Phzv2VAp70R965dag39~f~v6OD0-6jSpM8wQmuk09y3c6De6IV7ZKuMvQD8J14HFJsv6jbRz7owHR2FeHDeJmvPZiNOKmCvlUSzXh4tSRQstKgyMkog7aga4mmKMWI-ESRIMYDNWqmgWUA2RaPypYfd2a~6GsDjnnHvfRW7dhu42qacyGmWRBMa2r~Q-1571ajlq15oa7y17s9mowzsI2btLCaccCV~okTXcBxcaLZT~vrNxqQ1xORLCET8UMh5fj337~9R~p9WcR72L3bXsqI26eFuA6mf8qMhxrVOLNvH8Gg6OeSsXtSqhEMRdSA__"
            alt="Logo"
            style={headerStyles.logo}
          />

          <Nav className="justify-content-center" style={headerStyles.nav}>
            <Nav.Link as={Link} to="/cadastrarloja" style={headerStyles.navLink}>
              Cadastro de Loja
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastrocliente" style={headerStyles.navLink}>
              Cadastro de Cliente
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastroproduto" style={headerStyles.navLink}>
              Cadastrar Produtos
            </Nav.Link>
            <Nav.Link as={Link} to="/" style={headerStyles.navLink}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={headerStyles.divBelowHeader}></div>
    </>
  );
}

export default Header;

const headerStyles = {
  navbar: {
    backgroundColor: '#006D77',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width: '100%',
    padding: '0',
    marginRight: '2rem', 
  },
  brand: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '10px', 
    fontFamily: 'Ubuntu, sans-serif',
    marginLeft: '12px', 
  },
  logo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: '10px', 
  },
  form: {
    flex: 1,
    maxWidth: '600px',
    display: 'flex',
    gap: '0px',
    justifyContent: 'flex-start',
  },
  formControl: {
    borderRadius: '5px',
    padding: '10px 20px',
    border: '5px solid #FFFFFF',
    width: '480px',
  },
  button: {
    backgroundColor: '#001F2D',
    color: '#006D77',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
  },
  searchIcon: {
    color: '#219EBC',
    fontSize: '1.2rem',
  },
  divBelowHeader: {
    backgroundColor: '#001F2D',
    width: '100%',
    height: '5px',
    marginTop: '0',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'auto',
    marginLeft: '10rem',
    position: 'relative',
    top: '-2px',
  },
  
  navLink: {
    color: '#fff', 
    fontSize: '16px', 
    margin: '8px',
    gap:'5px'
  }
};