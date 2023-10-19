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
          const productResponse = await fetch('http://localhost:5000/product');
          const sliderResponse = await fetch('/slider.json');
          const loadingBrand = await productResponse.json();
          const sliderImage = await sliderResponse.json();
          return { loadingBrand, sliderImage };
        },
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('http://localhost:5000/product'),
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
