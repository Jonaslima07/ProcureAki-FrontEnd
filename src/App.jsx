// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './templates/Layout.jsx';
import Home from './views/Home.jsx';
import CadastrarProduto from './views/CadastrarProduto'; // Certifique-se de que o caminho está correto
import CadastrarLoja from './views/CadastrarLoja.jsx';
import CadastroCliente from './views/CadastroCliente.jsx';
import Login from './views/Login.jsx';
import NoPage from './views/NoPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'cadastroproduto',
          element: <CadastrarProduto />,
        },
        {
          path: 'cadastrocliente',
          element: <CadastroCliente />,
        },
        {
          path: 'cadastrarloja',
          element: <CadastrarLoja />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
