import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import '../components/carrossel.css'; // Importe o arquivo CSS
import Procuraakisection from '../components/Procuraakisection'; // Importe o componente corretamente
import '../components/cards.css';

const Carrossels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Assuming 2 slides in the carousel
    }, 3000); // Avança automaticamente a cada 3 segundos
    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <Container id="home" className="mt-4">
      {/* Carrossel */}
      <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/primadlucasnocell.jpg"
            alt="Imagem 1"
          />
          <Carousel.Caption style={carouselCaptionStyles}>
            <p>O ProcureAki é uma plataforma que facilita a busca por suas necessidades sem burocracia. Conectamos clientes e vendedores de forma direta.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/clientesconversando.jpg"
            alt="Imagem 2"
          />
          <Carousel.Caption style={carouselCaptionStyles}>
            <p>O ProcureAki é fácil de usar, é prático e o mais importante: Te conectamos a quem e o que, de fato, você precisa.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Seção de Procuraakisection */}
      <Procuraakisection />

      {/* Parte inferior (Cards) */}
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <h5 className="card-title">Você é cliente?</h5>
            <div className="card text-center">
              <img src="img/nocelular.png" className="card-img-top" alt="Cliente" />
              <div className="card-body">
                <p className="card-text">
                  Se conecte ao <strong>ProcureAki</strong> e ache o que precisa!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <h5 className="card-title">Você é dono de uma loja?</h5>
            <div className="card text-center">
              <img src="img/lojacard.jpeg" className="card-img-top" alt="Dono de Loja" />
              <div className="card-body">
                <p className="card-text">
                  Se conecte ao <strong>ProcureAki</strong> e dê um up nas suas vendas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container >
  );
};

export default Carrossels;
// Estilos
const headerStyles = {
  container: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: '20px',
  },
  listStyle: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.5',
  },
  
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    marginTop: '10px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '15px',
  },
  cardText: {
    fontSize: '16px',
    color: '#555',
  },
  buttonPrimary: {
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#0066cc',
    border: 'none',
    marginTop: '10px',
  },
  buttonSuccess: {
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    border: 'none',
    marginTop: '10px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colMd6: {
    flex: '1',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  // Estilo para os textos dentro dos cards
  cardTextStyle: {
    fontSize: '16px',
    color: '#333', 
    padding: '10px', 
    margin: '10px 0', 
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  }

};

// Estilo para a legenda do carrossel
const carouselCaptionStyles = {
  backgroundColor: '#B6CCFE80', // Cor de fundo
  color: 'white', // Cor do texto
  fontSize: '31px', // Tamanho maior do texto
  padding: '15px', // Padding para dar espaçamento
  borderRadius: '8px', // Bordas arredondadas
  
};
