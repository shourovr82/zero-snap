import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import ProductListing from "./components/Products/ProductListing";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:productId',
        element: <ProductDetails></ProductDetails>
      }
    ]
  }
])

export default router;