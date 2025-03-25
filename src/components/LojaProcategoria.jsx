import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductListados = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://procureaki.onrender.com/produtos');
      const data = await response.json();
      setProducts(data.produtos || data);
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // No array vazio, será chamado apenas quando o componente for montado

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          {/* Exibindo o nome da loja e a imagem */}
          <div style={styles.storeHeader}>
            <img
              src="/img/casaverde.png" 
              alt="Manu Bijuterias"
              style={styles.storeImage}
            />
            <h2 style={styles.storeName}>Manu Bijuterias</h2>
          </div>

          <div style={styles.icon}>
            <p style={styles.produtext}>Produtos</p>
            <div style={styles.divlowHeader}></div>
          </div>
        </Col>
      </Row>

      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <div style={styles.productItem}>
              <img
                src={product.imagem_url ? `/img/${product.imagem_url}` : '/img/default-image.png'}
                alt={product.name}
                style={styles.productImage}
              />
              <div>
                <h5>{product.name}</h5>
                <p>Preço: R$ {product.preco}</p>
                <p>Quantidade: {product.quantidade}</p>
                <p>{product.descricao}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListados;

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  storeHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
    marginRight: '102px', // Espaçamento entre a imagem e o nome da loja
  },
  storeImage: {
    width: '70px', // Tamanho da imagem da loja
    height: '70px', // Tamanho da imagem da loja
    borderRadius: '50%',
    marginRight: '920px',
    
  },
  storeName: {
    fontSize: '26px',
    color: '#006D77', // Cor do nome da loja
    position:'relative',
    top: '6px',
    left: '-922px'
    
  },
  icon: {
    fontSize: '40px',
    color: '#007bff',
    marginTop: '30px',
  },
  produtext: {
    width: '111px',
    color: '#02040F',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '100%',
    position: 'relative',
    top: '160px',
  },

  divlowHeader: {
    backgroundColor: '#006D77',
    width: '100%',
    height: '5px',
    marginTop: '160px',
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
};
