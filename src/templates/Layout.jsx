import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import HeaderProdutos from '../components/HeaderProdutos';  // Importando corretamente o HeaderProdutos
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import FooterLimpo from '../components/FooterLimpo';

const Layout = () => {
  const location = useLocation();

  console.log('Current path:', location.pathname);  // Para depuração

  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const isCadastrarProdutosPage = location.pathname === '/cadastroproduto';
  const isCadastroClientePage = location.pathname === '/cadastrocliente';


  return (
    <>
      {isHomePage && <Header />}
      {isCadastrarProdutosPage && <HeaderProdutos />}  {/* Renderizando o HeaderProdutos na rota específica */}
      {isCadastroClientePage && <HeaderProdutos />}  {/* Renderizando o HeaderProdutos na rota específica */}
      
      <Container>
        <main>
          <Outlet />  {/* Renderiza o componente filho, como CadastrarProduto */}
        </main>
      </Container>

      {isHomePage && <Footer />}
      {isCadastrarProdutosPage && <FooterLimpo />} 
    </>
  );
};

export default Layout;  // Certifique-se de que a exportação é padrão
