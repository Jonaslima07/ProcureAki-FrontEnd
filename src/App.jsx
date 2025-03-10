import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./templates/Layout.jsx";
import Home from './views/Home';
import CadastrarLoja from './views/CadastrarLoja.jsx';
import Login from './views/Login';
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
          
          path: 'CadastrarLoja',
          element: <CadastrarLoja/>,
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