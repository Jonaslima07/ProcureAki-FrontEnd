import React from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'; // Certifique-se de importar Link

function Header() {
  return (
    <>
      <Navbar style={headerStyles.navbar} expand="lg">
        <Container fluid style={headerStyles.container}>
          <Navbar.Brand as={Link} to="/" style={headerStyles.brand}>ProcureAki</Navbar.Brand>
          
  
          
          <Nav className="justify-content-center" style={headerStyles.nav}>
            <Nav.Link as={Link} to="/cadastrarloja">Cadastro de Loja</Nav.Link>
            <Nav.Link as={Link} to="/cadastrocliente">Cadastro de Cliente</Nav.Link>
            <Nav.Link as={Link} to="/cadastroproduto">Cadastrar Produtos</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
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
    padding: '0', // Remover qualquer preenchimento extra do container
    marginRight: '43rem',
     
  },
  brand: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '1rem',
    fontFamily: 'Ubuntu, sans-serif',
  },
  form: {
    flex: 1,
    maxWidth: '600px',
    display: 'flex',
    gap: '0px',
    justifyContent: 'flex-start', // Garante que o campo de pesquisa e o botão fiquem alinhados à esquerda
  },
  formControl: {
    borderRadius: '5px',
    padding: '10px 20px',
    border: '5px solid #FFFFFF', /* Definindo a borda de 5px */ 
    padding: '5px 10px',
    width: '480px', // Ajustar o tamanho do campo de pesquisa
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
    justifyContent: 'center',  // Alinha os links ao centro
    width: 'auto',  // Permite que os links ocupem apenas o necessário
    marginLeft: 'auto', // Isso vai alinhar os links à direita caso vcs queiram
    position: 'relative',
    top: '-5px',
    left: '-41px',
  }
};
