import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './templates/Layout.jsx';
import Home from './views/Home.jsx';
import CadastrarProduto from './views/CadastrarProduto'; 
import CadastrarLoja from './views/CadastrarLoja.jsx';  
import CadastroCliente from './views/CadastroCliente.jsx';
import LojaCategoria from './components/LojaCategoria.jsx';
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
          path: 'cadastrarLoja',
          element: <CadastrarLoja />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'lojacategoria/:nomeCategoria',  // Adicione o parâmetro aqui
          element: <LojaCategoria />,
        },
        {
          path: 'lojacategoria',  // Mantenha esta rota sem parâmetro se necessário
          element: <LojaCategoria />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;