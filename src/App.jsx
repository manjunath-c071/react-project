import './App.css'

import Navbar from './components/navbar/Navbar.jsx'

import HomePage from './pages/Home/HomePage.jsx'
import ProductsPage from './pages/Products/ProductsPage.jsx'
import AccessoriesPage from './pages/Accessories/AccessoriesPage.jsx'
import NewArrivalsPage from './pages/NewArrivals/NewArrivalsPage.jsx'
import DealsPage from './pages/Deals/DealsPage.jsx'
import BrandsPage from './pages/Brands/BrandsPage.jsx'
import SupportPage from './pages/Support/SupportPage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* <p>© 2024 My E-commerce Store. All rights reserved.</p> */}
      </footer>
    </>
  )
}

export default App
