import React from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

const HeaderProdutos = () => {
  return (
    <Navbar style={headerStyle} expand="lg">
      <Container  fluid>
        <Navbar.Brand href="/">
          <Nav.Link href="/" style={textoProcureAk}>ProcureAk<img src="/img/locationwhite2.png" alt="locationwhiteicon" className="img-fluid" style={Locationwhite}  /></Nav.Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/" style={greetingStyle}>Olá, Mundo Bike<img src="/img/casaheader2.png" alt="casaheader2" className="img-fluid" style={CasaIcon}  /></Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderProdutos;

const headerStyle = {
    backgroundColor: '#006D77', // Cor de fundo do navbar
    padding: '20px 40px', // Padding do navbar
    
  };

  const greetingStyle = {
    fontWeight: 500,
    fontSize: '30px',  // Tamanho de fonte ajustado
    lineHeight: '1.2',  // Ajuste de linha para melhorar o espaçamento vertical
    letterSpacing: '0',  // Mantendo o espaçamento de letras normal
    width: '186px',  // Largura especificada
    height: '49px',  // Altura especificada
    top: '882px',  // Posicionamento da parte superior
    left: '782px',  // Posicionamento da parte esquerda
    color: 'white',  // Cor do texto
    position: 'center',  // Posicionamento absoluto para o controle de posição
    whiteSpace: 'nowrap',  // Impede que o texto quebre em várias linhas
    marginRight: '13rem', // ajusta a posição do nome no header
    
  };
  
  const textoProcureAk = {
    
    fontSize: '29px',  // Tamanho de fonte para o texto "ProcureAk"
    color: 'white',  // Cor do texto
    margin: 0,  // Remove a margem padrão do <p>
    lineHeight: '50px',  // Ajuste de linha para melhor espaçamento
    textAlign: 'left',  // Alinha o texto à esquerda
    width: '118px',
    height: '49px',
    Top: '882px',
    Left: '-10px',
    fontWeight: 500,
    letterSpacing: '0',  // Mantendo o espaçamento de letras normal
    position: 'relative',
    
  };

  const Locationwhite = {
    width: '33px',
    height: '33px',
    Top: '882px',
    lineHeight: '50px',  // Ajuste de linha para melhor espaçamento
    position: 'relative',
    top: '-4px',
    left: '-7px'
  };

  const CasaIcon = {
    width: '47px',
    height: '45px',
    Top: '887px',
    Left: '734',
    lineHeight: '50px',  // Ajuste de linha para melhor espaçamento
    position: 'relative',
    top: '-5px',
    left: '-281px',
    
    
  }