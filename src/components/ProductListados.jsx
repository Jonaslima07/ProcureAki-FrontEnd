import  { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductForm from '../components/ProductForm'; 
import ProductCatolog from '../components/ProductCatolog'; 

const ProductListados = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/produtos');
      const data = await response.json();
      setProducts(data.produtos || data); 
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
    }
  };

  
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowForm(true); 
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/produtos/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts(); 
      }
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  
  useEffect(() => {
    fetchProducts();
  }, []); // No array vazio, será chamado apenas quando o componente for montado

  const handleProductSubmit = () => {
    fetchProducts(); 
    handleCloseForm(); 
  };

  return (
    <Container style={styles.container}>
      {/* Exb o button de "Cadastrar Produto" apns na tl de prdts listados */}
      {products.length !== 0 && (
        <Row>
          <Col>
            <Button 
              style={styles.button} 
              onClick={handleShowForm}
            >
              Cadastrar Produto
            </Button>
          </Col>
        </Row>
      )}

      {products.length === 0 ? (
        <ProductCatolog handleShowForm={handleShowForm} />
      ) : (
        <>
          <Row>
            <Col>
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
                    src={product.image ? `/img/${product.image}` : '/img/default-image.png'}
                    alt={product.name}
                    style={styles.productImage}
                  />
                  <div>
                    <h5>{product.name}</h5>
                    <p>Preço: R$ {product.price}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <p>{product.description}</p>
                    <Button
                      variant="warning"
                      style={styles.editButton}
                      onClick={() => handleEditProduct(product)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {showForm && (
            <ProductForm 
              onClose={handleCloseForm} 
              fetchProducts={fetchProducts} 
              product={selectedProduct} 
              onSubmit={handleProductSubmit}
            />
          )}
        </>
      )}
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
  button: {
    width: '258px',
    height: '57px',
    marginTop: '20px',
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
    left: '-1px',
    color: '#02040F',
    Top: '1166px',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '100%',
    letterSpacing: '0',
    position: 'relative',
    top: '16px',
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

  editButton: {
    marginRight: '10px',
  },
};




// import React, { useState, useEffect } from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';
// import ProductForm from '../components/ProductForm'; 

// const ProductListados = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // Para armazenar o produto a ser editado

//   const handleShowForm = () => setShowForm(true);
//   const handleCloseForm = () => setShowForm(false);

 
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/produtos');
//       const data = await response.json();
//       console.log(data); // Vrf o q está snd rtnd
//       setProducts(data.produtos || data); // if  p estv dntr key
//     } catch (error) {
//       console.error('Erro ao carregar os produtos:', error);
//     }
//   };

//   const handleEditProduct = (product) => {
//     setSelectedProduct(product); 
//     setShowForm(true); 
//   };

//   const handleDeleteProduct = async (productId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/produtos/${productId}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         fetchProducts();
//       }
//     } catch (error) {
//       console.error('Erro ao excluir o produto:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <Container style={styles.container}>
//       <Row>
//         <Col>
//           <Button style={styles.button} onClick={handleShowForm}>
//             Cadastrar produto
//           </Button>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <div style={styles.icon}>
//             <p style={styles.produtext}>Produtos</p>
//             <div style={styles.divlowHeader}></div>
//           </div>
//         </Col>
//       </Row>

//       {/* exb produtos cadastrados */}
//       {products.length > 0 ? (
//         <Row>
//           {products.map((product, index) => (
//             <Col key={index} md={4}>
//               <div style={styles.productItem}>
//                 <img
//                   src={product.image ? `/img/${product.image}` : '/img/default-image.png'}
//                   alt={product.name}
//                   style={styles.productImage}
//                 />

//                 <div>
//                   <h5>{product.name}</h5>
//                   <p>Preço: R$ {product.price}</p>
//                   <p>Quantidade: {product.quantity}</p>
//                   <p>{product.description}</p>
//                   <Button
//                     variant="warning"
//                     style={styles.editButton}
//                     onClick={() => handleEditProduct(product)}
//                   >
//                     Editar
//                   </Button>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleDeleteProduct(product.id)}
//                   >
//                     Excluir
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <Row>
//           <Col>
//             <p style={styles.text}>Nenhum produto encontrado no catálogo.</p>
//           </Col>
//         </Row>
//       )}

//       {/* Exibe o formulário quando showForm for true */}
//       {showForm && <ProductForm onClose={handleCloseForm} fetchProducts={fetchProducts} product={selectedProduct} />}
//     </Container>
//   );
// };

// export default ProductListados;

// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: '50px',
//     fontFamily: 'Arial, sans-serif',
//   },

//   button: {
//     width: '258px',
//     height: '57px',
//     marginTop: '-2px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#006D77',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//   },
//   icon: {
//     fontSize: '40px',
//     color: '#007bff',
//     marginTop: '30px',
//   },
//   produtext: {
//     width: '111px',
//     Height: '664px',
//     left: '-1px',
//     color: '#02040F',
//     Top: '1166px',
//     fontWeight: 400,
//     fontSize: '26px',
//     lineHeight: '100%',  // Ajuste de altura de linha para melhorar a leitura
//     letterSpacing: '0',
//     position: 'relative', // Ajusta a posição do texto
//     lineHeight: '1.2',
//     top: '16px',  // Move o texto para baixo
//   },

//   divlowHeader: {
//     backgroundColor: '#006D77',
//     width: '100%',
//     height: '5px',
//     marginTop: '10px',
//   },

//   productItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     padding: '15px',
//     border: '1px solid #ddd',
//     margin: '10px 0',
//     borderRadius: '5px',
//     boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
//   },

//   productImage: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     marginBottom: '10px',
//   },

//   text: {
//     fontSize: '18px',
//     color: '#333',
//     marginTop: '20px',
//   },

//   editButton: {
//     marginRight: '10px',
//   },
// };
