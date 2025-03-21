//codigo sozinho

import  { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ProductForm from './ProductForm';

const ProductCatalog = () => {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <ul style={styles.titleList}>
              <li style={styles.titleone}>
                Xiiiiiii... Seu catálogo de produtos está vazio.
              </li>
              <li style={styles.titletwo}>
                Adicione produtos ao seu catálogo para
              </li>
              <li style={styles.titlethree}>
                alavancar suas vendas.
              </li>
            </ul>
            <Button style={styles.button} onClick={handleShowForm}>
            Cadastrar produto
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={styles.icon}>
              <p style={styles.produtext}>Produtos</p>
              <div style={styles.divlowHeader}></div>
              <img src="/img/pacoteicon.png" alt="pacoteicon" className="img-fluid" style={styles.pacoteicon} />
          </div>
          <p style={styles.text}>Catálogo vazio</p>
        </Col>
      </Row>

      {showForm && <ProductForm onClose={handleCloseForm} />}

    </Container>
  );
};

export default ProductCatalog;

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  titleList: {
    listStyle: 'none',  // Remove os marcadores das listas
    padding: 0,         // Remove o preenchimento
    margin: '0 auto',   // Centraliza a lista
    width: '503px',     // Define a largura
    lineHeight: '0.00',  // Ajuste de altura de linha para melhorar a leitura
    letterSpacing: '0',
    
  },
  
  titleone: {
    width: '503px',
    height: 'auto',  // Corrigido para permitir o ajuste da altura conforme o conteúdo
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.00',  // Ajuste de altura de linha para melhorar a leitura
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',  // Quebra as palavras para se ajustar no tamanho da caixa
    whiteSpace: 'normal',  // Permite que as palavras se quebrem
    
    
  },

  titletwo: {
    width: '503px',
    height: 'auto',  // Corrigido para permitir o ajuste da altura conforme o conteúdo
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.6',  // Ajuste de altura de linha para melhorar a leitura
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',  // Quebra as palavras para se ajustar no tamanho da caixa
    whiteSpace: 'normal',  // Permite que as palavras se quebrem
    display: 'inline-block',  // Permite o controle do alinhamento
    marginBottom: '10px',
    left: '-28px'
  },

  titlethree: {
    width: '503px',
    height: 'auto',  // Corrigido para permitir o ajuste da altura conforme o conteúdo
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.0',  // Ajuste de altura de linha para melhorar a leitura
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',  // Quebra as palavras para se ajustar no tamanho da caixa
    whiteSpace: 'normal',  // Permite que as palavras se quebrem
    display: 'inline-block',  // Permite o controle do alinhamento
    marginBottom: '1px',     // Ajuste de espaçamento entre os títulos
    left: '-112px',
    //top: '-20px',  // Ajusta a posição para cima
    transform: 'translateY(-10px)',  // Ajusta ainda mais a posição do texto para cima
    
  },

  button: {
    width: '-258px',
    height: '57px',
    Top: '1048px',
    left: '354px',
    marginTop: '-2px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#006D77',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  icon: {
    Width: '111px',
    fontSize: '40px',
    color: '#007bff',
    marginTop: '80px',
    
  },
  pacoteicon: {
    width: '121px',
    height: '121px',
    margin: '0 auto',
  },
  text: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#333',
    width: '187px',  // Largura do texto
    height: '31px',  // Altura do texto
    top: '-18px',   // Posição para mover o texto para baixo
    //transform: 'translateY(-10px)',  // Ajusta ainda mais a posição do texto para cima
    fontWeight: 600,  // Peso da fonte
   
    lineHeight: '100%', // Altura da linha
    letterSpacing: '0%', // Espaçamento entre as letras
    left: '500px',   // Posição horizontal
    position: 'relative', // Garantir que as propriedades de top e left funcionem corretamente
    transform: 'translateX(50px)', // Move o texto 50px para a direita
    alignItems: "center", // Alinha o texto no centro (se necessário)
    textAlign: 'center',  // Centraliza o texto
    
  },
  
  produtext: {
    width: '111px',
    Height: '664px',
    left:'-1px',
    color:  '#02040F',
    Top: '1166px',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '100%',  // Ajuste de altura de linha para melhorar a leitura
    letterSpacing: '0',
    position: 'relative', // Ajusta a posição do texto
    top: '16px',  // Move o texto para baixo
    
  },

  divlowHeader: {
    backgroundColor: '#006D77',
    width: '1295px',
    height: '5px',
    marginTop: '10',
  }
};