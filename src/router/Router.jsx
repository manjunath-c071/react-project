import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';

import HomePage from '../pages/Home/HomePage'
import AboutPage from '../pages/About/AboutPage'
import ProductsPage from '../pages/Products/ProductsPage'
import AccessoriesPage from '../pages/Accessories/AccessoriesPage'
import NewArrivalsPage from '../pages/NewArrivals/NewArrivalsPage'
import DealsPage from '../pages/Deals/DealsPage'
import BrandsPage from '../pages/Brands/BrandsPage'
import SupportPage from '../pages/Support/SupportPage'

const my_router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/accessories',
        element: <AccessoriesPage />
      },
      {
        path: '/new_arrivals',
        element: <NewArrivalsPage />
      },
      {
        path: '/deals',
        element: <DealsPage />
      },
      {
        path: '/brands',
        element: <BrandsPage />
      },
      {
        path: '/support',
        element: <SupportPage />
      }
    ]
  }
])

export default my_router;