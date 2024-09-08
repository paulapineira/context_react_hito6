import React, { useContext } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import { CartContext } from '../context/CartContext'; 

const Navbar = () => {
  const { getTotal, getQuantity } = useContext(CartContext);

  const total = getTotal();
  const quantity = getQuantity();

  const token = false; /*recordatorio: cuando es true se deja de mostrar login y register para mostrar profile*/

  return (
    <Nav className="navbar">
      <div className="d-flex align-items-center">
        <span className="navbar-title">Pizzería Mamma Mía!</span>
        <div className="nav-buttons d-flex">
          <Link to="/">
            <Button variant="outline-light" className="mx-2">
              🍕 Home
            </Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile" >
                <Button variant="outline-light" className="mx-2">
                  Profile
                </Button>
              </Link>
              <Button variant="outline-light" className="mx-2">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="mx-2">
                  🔒 Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-light" className="mx-2">
                  🔒 Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Link to="/cart" >
        <Button variant="outline-light" className="total-button">
          🛒 {quantity} Items - ${total}
        </Button>
      </Link>
    </Nav>
  );
};

export default Navbar;









