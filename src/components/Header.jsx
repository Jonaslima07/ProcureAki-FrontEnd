// Header.jsx
import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';



function Header() {
  return (
    <>
        <Navbar style={headerStyles.navbar} expand="lg">
        <Container style={headerStyles.container}>
            <Navbar.Brand href="#" style={headerStyles.brand}>ProcureAki</Navbar.Brand>
            
            <Form style={headerStyles.form}>
            <FormControl 
                type="search" 
                placeholder="Busque por uma loja" 
                style={headerStyles.formControl}
            />
            <Button style={headerStyles.button}>
                <Search style={headerStyles.searchIcon} /> {/* Ícone de pesquisa */}
            </Button>
            </Form>
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
    fontFamily: 'Ubuntu, sans-serif', // Aplicando a fonte Ubuntu
       
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
    //border: '1px solid #ddd',
    border: '5px solid #FFFFFF', /* Definindo a borda de 5px */                  
    padding: '5px 10px',
    width: '480px', // Ajustar o tamanho do campo de pesquisa
  },
  button: {
    backgroundColor: '#001F2D', // Fundo preto
    color: '#006D77', // Cor azul
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    
  },
  searchIcon: {
    color: '#219EBC', // Cor do ícone azul
    fontSize: '1.2rem', // Tamanho do ícone
  },
   divBelowHeader: {
    backgroundColor: '#001F2D', // Cor da div
    width: '100%', // Largura da div (100% da largura do contêiner pai)
    height: '5px', // Altura da div (ajustada para ser uma linha fina)
    marginTop: '0', // Espaçamento acima da div
   }
};
