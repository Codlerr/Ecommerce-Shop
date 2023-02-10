import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';
import PNF from './pages/404'
import Home from './pages/home'
import Products from './pages/product-listing'
import ProductPage from './pages/product-page'

const Layout = () => {
  return(
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"*",
        element:<PNF/>
      },
      {
        path:"/product-listing",
        element:<Products/>
      },
      {
        path:"/product-page",
        element:<ProductPage/>
      },
      
    ]
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
