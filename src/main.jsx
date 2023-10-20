import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import BrandPage from './pages/BrandPage';
import UpdateProduct from './pages/UpdateProduct';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json'),
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/brand/:brandName',
        element: <BrandPage></BrandPage>,
        loader: async () => {
          const productResponse = await fetch(
            'https://prestige-car-hub-server.vercel.app/product'
          );
          const sliderResponse = await fetch('/slider.json');
          const loadingBrand = await productResponse.json();
          const sliderImage = await sliderResponse.json();
          return { loadingBrand, sliderImage };
        },
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () =>
          fetch('https://prestige-car-hub-server.vercel.app/product'),
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://prestige-car-hub-server.vercel.app/product/${params.id}`
          ),
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: () =>
          fetch('https://prestige-car-hub-server.vercel.app/cartProduct'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
