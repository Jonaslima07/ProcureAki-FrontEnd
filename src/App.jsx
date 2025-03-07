// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./templates/Layout.jsx";
import Home from './views/Home';
import Cadastro from './views/Cadastro';
import Login from './views/Login';
import NoPage from './views/NoPage.jsx';

function App() {
  // Definindo as rotas
  const router = createBrowserRouter([
    {
      path: '/',
      // element: <Layout />,
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          // Rota raiz (index) - Home
          index: true,
          element: <Home />,
        },
        {
          // /cadastro
          path: 'cadastro',
          element: <Cadastro />,
        },
        {
          // /login
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;