import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

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

    // Enviar dados para a fake API
    const response = await fetch('http://localhost:5000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });

    if (response.ok) {
      alert('Produto cadastrado com sucesso!');
      fetchProducts(); // Atualiza os produtos exibidos
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
          <Form.Group controlId="productName">
            <Form.Label style={{color: '#006D77'}} >Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome do produto" />
          </Form.Group>

          <Form.Group controlId="productQuantity">
            <Form.Label style={{color: '#006D77'}} >Quantidade</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Digite a quantidade" 
              min="0" 
              step="1" 
            />
          </Form.Group>

          <Form.Group controlId="productPrice">
            <Form.Label style={{color: '#006D77'}}>Preço</Form.Label>
            <Form.Control type="number" placeholder="Digite o preço" />
          </Form.Group>

          <Form.Group controlId="productImage">
            <Form.Label style={{color: '#006D77'}}>Imagem do Produto</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group controlId="productDescription">
            <Form.Label style={{color: '#006D77'}} >Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Descreva o produto" />
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
          onClick={onClose}
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductForm;
