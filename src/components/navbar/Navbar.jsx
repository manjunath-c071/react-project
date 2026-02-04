import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () =>  { 
    return (<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PhonHub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/accessories">Accessories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/new_arrivals">New Arrivals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/deals">Deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/brands">Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/support">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;
