import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [categorias, setCategorias] = useState([]);

  const fetchCategorias = async () => {
    try {
      const res = await fetch("https://procureaki.onrender.com/categorias");
      const data = await res.json();
      console.log(data);

      // Agrupar categorias por nome e exibir apenas uma vez por nome
      const categoriasUnicas = [];
      const seenCategorias = new Set();

      data.forEach((categoria) => {
        if (!seenCategorias.has(categoria.nome_categoria)) {
          seenCategorias.add(categoria.nome_categoria);
          categoriasUnicas.push(categoria);
        }
      });

      setCategorias(categoriasUnicas);
    } catch (error) {
      console.error("Erro ao carregar categorias", error);
      toast.error("Erro ao carregar categorias.");
    }
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <>
      <Navbar style={headerStyles.navbar} expand="lg">
        <Container fluid style={headerStyles.container}>
          <Navbar.Brand as={Link} to="/" style={headerStyles.brand}>
            ProcureAki
          </Navbar.Brand>
          <img
            src="https://s3-alpha-sig.figma.com/img/7b45/e801/23d69355f89fd96e98ec547f1403c355?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZNrcIcaupXBVoPXJ91dD2FW0Phzv2VAp70R965dag39~f~v6OD0-6jSpM8wQmuk09y3c6De6IV7ZKuMvQD8J14HFJsv6jbRz7owHR2FeHDeJmvPZiNOKmCvlUSzXh4tSRQstKgyMkog7aga4mmKMWI-ESRIMYDNWqmgWUA2RaPypYfd2a~6GsDjnnHvfRW7dhu42qacyGmWRBMa2r~Q-1571ajlq15oa7y17s9mowzsI2btLCaccCV~okTXcBxcaLZT~vrNxqQ1xORLCET8UMh5fj337~9R~p9WcR72L3bXsqI26eFuA6mf8qMhxrVOLNvH8Gg6OeSsXtSqhEMRdSA__"
            alt="Logo"
            style={headerStyles.logo}
          />

          <Dropdown>
            <Dropdown.Toggle style={headerStyles.btnDrop} variant="success" id="dropdown-basic">
              Selecione uma categoria para buscar por uma loja
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categorias.length > 0 ? (
                categorias.map((categoria) => (
                  <Dropdown.Item style={headerStyles.item} key={categoria.id} href={`#categoria-${categoria.nome_categoria}`}>
                    {categoria.nome_categoria}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item disabled>Carregando...</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Nav className="justify-content-center" style={headerStyles.nav}>
            <Nav.Link as={Link} to="/cadastrarloja" style={headerStyles.navLink}>
              Cadastro de Loja
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastrocliente" style={headerStyles.navLink}>
              Cadastro de Cliente
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastroproduto" style={headerStyles.navLink}>
              Cadastrar Produtos
            </Nav.Link>
            <Nav.Link as={Link} to="/" style={headerStyles.navLink}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ToastContainer />
      <div style={headerStyles.divBelowHeader}></div>
    </>
  );
}

export default Header;

const headerStyles = {
  navbar: {
    backgroundColor: "#006D77",
    padding: "1rem 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "0",
    marginRight: "2rem",
  },
  brand: {
    fontSize: '29px',  
    color: 'white',  
    margin: 0,  
    lineHeight: '50px',  
    textAlign: 'left',  
    Top: '52px',
    Left: '15px',
    fontWeight: 500,
    position: 'relative',
    
  },
  logo: {
    width: "33px",
    height: "33px",
    position: "relative",
    right: "2px",
    bottom: "2px",
  },
  divBelowHeader: {
    backgroundColor: "#001F2D",
    width: "100%",
    height: "5px",
    marginTop: "0",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "auto",
    marginLeft: "10rem",
    position: "relative",
    top: "-2px",
  },
  navLink: {
    color: "#fff",
    fontSize: "16px",
    margin: "8px",
    gap: "5px",
  },
  btnDrop: {
    backgroundColor: "white",
    color: "black",
    fontSize: "15px",
    border: "none",
    boxShadow: "none",
    padding: "8px 12px",
    cursor: "pointer",
    textTransform: "none",
  },
  item: {
    backgroundColor: "white", // Fundo preto
    color: "black", // Texto branco
    padding: "10px 15px", // Espaçamento interno
    borderRadius: "5px", // Bordas arredondadas
    transition: "background-color 0.3s ease", // Transição suave
  },
  itemHover: {
    backgroundColor: "#444", // Cor ao passar o mouse
  }
};
