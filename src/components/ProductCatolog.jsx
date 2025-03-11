//codigo unido so vai funcionar conforme ativação do json, se estiver atv ele mostra os produtos
//senao mostra a primeira tela com a caixinha
import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import ProductForm from '../components/ProductForm'; // Importa o formulário

const ProductCatalog = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Para controlar o estado de carregamento

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // Função para carregar produtos da API falsa
  const fetchProducts = async () => {
    try {
      setIsLoading(true); // Inicia o carregamento
      const response = await fetch('http://localhost:5000/produtos');
      const data = await response.json();
      setProducts(data.produtos || data); // Se os produtos estiverem dentro da chave 'produtos'
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    } finally {
      setIsLoading(false); // Ao terminar o carregamento, definimos como falso
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Função que manipula a exibição das telas
  const renderScreen = () => {
    // Caso a API esteja carregando, exibe o spinner
    if (isLoading) {
      return (
        <div style={styles.loadingContainer}>
          <Spinner animation="border" variant="primary" />
          <p style={styles.text}>Carregando produtos...</p>
        </div>
      );
    }

    // Quando não houver produtos cadastrados
    if (products.length === 0) {
      return (
        <Container style={styles.container}>
          <Row>
            <Col>
              <ul style={styles.titleList}>
                <li style={styles.titleone}>Xiiiiiii... Seu catálogo de produtos está vazio.</li>
                <li style={styles.titletwo}>Adicione produtos ao seu catálogo para</li>
                <li style={styles.titlethree}>alavancar suas vendas.</li>
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

          {/* Exibe o formulário quando showForm for true */}
          {showForm && <ProductForm onClose={handleCloseForm} />}
        </Container>
      );
    }

    // Quando houver produtos cadastrados
    return (
      <Container style={styles.container}>
        <Row>
          <Col>
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
            </div>
          </Col>
        </Row>

        {/* Exibe os produtos cadastrados */}
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={4}>
              <div style={styles.productItem}>
                <img
                  src={product.image ? `/img/${product.image}` : '/img/default-image.png'}
                  alt={product.name}
                  style={styles.productImage}
                />
                <div>
                  <h5>{product.name}</h5>
                  <p>Preço: R$ {product.price}</p>
                  <p>Quantidade: {product.quantity}</p>
                  <p>{product.description}</p>
                  <Button variant="warning" style={styles.editButton}>Editar</Button>
                  <Button variant="danger">Excluir</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Exibe o formulário quando showForm for true */}
        {showForm && <ProductForm onClose={handleCloseForm} fetchProducts={fetchProducts} />}
      </Container>
    );
  };

  return renderScreen();
};

export default ProductCatalog;

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  titleList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 auto',
    width: '503px',
    lineHeight: '0.00',
    letterSpacing: '0',
  },
  titleone: {
    width: '503px',
    height: 'auto',
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.00',
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  },
  titletwo: {
    width: '503px',
    height: 'auto',
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.6',
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    display: 'inline-block',
    marginBottom: '10px',
    left: '-28px',
  },
  titlethree: {
    width: '503px',
    height: 'auto',
    fontSize: '24px',
    color: '#333',
    fontWeight: 400,
    lineHeight: '0.0',
    letterSpacing: '0',
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '20px',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    display: 'inline-block',
    marginBottom: '1px',
    left: '-112px',
    transform: 'translateY(-10px)',
  },
  button: {
    width: '258px',
    height: '57px',
    marginTop: '-2px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#006D77',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  icon: {
    fontSize: '40px',
    color: '#007bff',
    marginTop: '30px',
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
     lineHeight: '1.2',
    top: '16px',  // Move o texto para baixo
    
  },

  pacoteicon: {
    width: '121px',
    height: '121px',
    margin: '0 auto',
  },

  divlowHeader: {
    backgroundColor: '#006D77',
    width: '100%',
    height: '5px',
    marginTop: '10px',
  },
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
    border: '1px solid #ddd',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '10px',
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
    fontSize: '26px', // Tamanho da fonte
    lineHeight: '100%', // Altura da linha
    letterSpacing: '0%', // Espaçamento entre as letras
    left: '500px',   // Posição horizontal
    position: 'relative', // Garantir que as propriedades de top e left funcionem corretamente
    transform: 'translateX(50px)', // Move o texto 50px para a direita
    alignItems: "center", // Alinha o texto no centro (se necessário)
    textAlign: 'center',  // Centraliza o texto
    
  },
  editButton: {
    marginRight: '10px',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  retryButton: {
    marginTop: '10px',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};
