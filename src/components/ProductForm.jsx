import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// 'http://localhost:5000/produtos',

const ProductForm = ({ onClose, fetchProducts }) => {
  const [productData, setProductData] = useState({
    name: '',
    quantity: 0,
    price: 0,
    image: null,
    description: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch('http://localhost:5000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });

    if (response.ok) {
      alert('Produto cadastrado com sucesso!');
      fetchProducts();
      onClose();
    } else {
      alert('Erro ao cadastrar o produto');
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#006D77' }}>Cadastrar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label style={{color: '#006D77'}}>Nome do Produto</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Digite o nome do produto" 
              value={productData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label style={{color: '#006D77'}}>Quantidade</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Digite a quantidade" 
              min="0" 
              value={productData.quantity}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label style={{color: '#006D77'}}>Preço</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Digite o preço" 
              value={productData.price}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label style={{color: '#006D77'}}>Imagem do Produto</Form.Label>
            <Form.Control 
              type="file"
              onChange={(e) => setProductData({ ...productData, image: e.target.files[0] })}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label style={{color: '#006D77'}}>Descrição</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Descreva o produto" 
              value={productData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button 
          style={{ backgroundColor: '#006D77', color: 'white' }} 
          variant="primary" 
          onClick={handleSubmit}  
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductForm;
