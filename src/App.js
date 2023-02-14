import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';
import PNF from './pages/404';
// import Home from './pages/home'
import Products from './pages/product-listing';
import ProductPage from './pages/product-page';
import Cart from './pages/cart';
import Login from './pages/login';
import OrderAdd from './pages/order-address';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';
import EditProfile from './pages/edit-profile';
import AllOrders from './pages/all-orders';

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
        // element:<Home/>
        element:<Products/>
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
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/order-address",
        element:<OrderAdd/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/payment",
        element:<Payment/>
      },
      {
        path:"/edit-profile",
        element:<EditProfile/>
      },
      {
        path:"/all-orders",
        element:<AllOrders/>
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
