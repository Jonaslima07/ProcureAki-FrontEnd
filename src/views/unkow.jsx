import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import '../components/carrossel.css'; // Importe o arquivo CSS

const Home = () => {
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
            src="https://s3-alpha-sig.figma.com/img/5d85/9c50/c022e661921812425d6f6cfaee2afbde?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lT6TQJCTKO~lFqUAFUOCETNCrsLfxbl41xgQokK3r2BBOq~LuuMM3kXgXaflz7cuIplVBzwn~OQSqJ7BqqG6JsPzeElJBkDRT2UpBVHxmz3Rcq-vFSVX3Vi7b8W0UsCHoyzxdBp5UU9SeiuXDeOHLPV7~5ZaUzkl1EH5c87jfhIsK5vTzTehKWH3PRnWlPiAkn58RRApv~qinP-ISMRTdlVFVlysCuaTOaeHPDwGAakNXqIt1s0cSXMySMWzAscGuacHP0CjrhzGP-54w-VNldX3W0ySbaacqM8dyMOnxUKQL6Wl012k5DZ2kNjYg2u1Q2XKoD30hvNMLf1v~6VH5g__"
            alt="Imagem 1"
          />
          <Carousel.Caption style={carouselCaptionStyles}>
            <p>O ProcureAki é uma plataforma que facilita a busca por suas necessidades sem burocracia. Conectamos clientes e vendedores de forma direta.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-alpha-sig.figma.com/img/f094/a092/a2dbd97e443e8ef10eed0470e02ab8fc?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GdNx2QNHk2UbLl8RCbT2hPRnkIaJBCQqhEa3~Xk8IwUz9XeA2fA8Zlx4ZWsCSpk3d5rLbTJkXJ9TPW6CgHKDc~bkaJujCoRYNdlOyAZW4ypUA-A8G1fqLfqmyVwdpNdjs4mlgqc9n53SU9XLlegJ3~JmvhJHYcNb1A25MbI1Bi~YWYqBgXxrvlGUFfqDXAH6Il1EFnn4lOVG4vQu26YEK4D~~NhRARY1EK4P~-knHR-wDOa5vpvpNu3IqVfgD3zSgGkfS6vnzFfD9oluC-xARP2kDC8TZK0qjDxCVzPj8Cn3JAFA3oujg5a1Gw11Z3XsZG1EELrKXFxfEnJ~8ZZNrw__"
            alt="Imagem 2"
          />
          <Carousel.Caption style={carouselCaptionStyles}>
            <p>O ProcureAki é fácil de usar, é prático e o mais importante: Te conectamos a quem e o que, de fato, você precisa.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Adicionando a nova seção entre o carrossel e os cards */}
      <Row className="mt-4 text-center">
        <Col>
          <h2 style={headerStyles.sectionTitle}>Quem procura, acha! Ache no ProcureAki</h2>
          <ul style={headerStyles.listStyle}>
            <li style={headerStyles.listItem}>O ProcureAki te conecta às lojas e vendedores próximos da sua localização.</li>
            <li style={headerStyles.listItem}>Você, cliente, pode ir até uma loja ou um vendedor próximo e aproveitar as vantagens.</li>
          </ul>
        </Col>
      </Row>

      {/* Parte inferior (Cards) */}
      <Row className="mt-4">
        <Col md={6}>
          <div className="info-box text-center">
            <h3>Você é cliente?</h3>
            <p style={cardTextStyle}>Se conecte ao ProcureAki e ache o que precisa!</p>
            <img src="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2017/11/experi%C3%AAncia-do-cliente.jpg" alt="Cliente" className="img-fluid" />
          </div>
        </Col>
        <Col md={6}>
          <div className="info-box text-center">
            <h3>Você é dono de uma loja?</h3>
            <p style={cardTextStyle}>Se conecte ao ProcureAki e dê um up nas suas vendas!</p>
            <img src="/img/lojacard.jpeg" alt="Loja" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

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
  card: {
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '350px',
    padding: '20px',
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
  },
};

// Estilo para a legenda do carrossel
const carouselCaptionStyles = {
  backgroundColor: '#B6CCFE80', // Cor de fundo
  color: 'white', // Cor do texto
  fontSize: '31px', // Tamanho maior do texto
  padding: '15px', // Padding para dar espaçamento
  borderRadius: '8px', // Bordas arredondadas
};

