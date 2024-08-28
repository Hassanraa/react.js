import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faHistory, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-indigo-200 transition duration-200">Stitching Store</Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center flex-grow justify-center">
          <Link to="/" className="hover:text-indigo-200 transition duration-200">Home</Link>
          <Link to="/products" className="hover:text-indigo-200 transition duration-200">Products</Link>
          <Link to="/admin" className="hover:text-indigo-200 transition duration-200">Admin</Link>
          <Link to="/history" className="hover:text-indigo-200 transition duration-200 flex items-center">
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            History
          </Link>
          <Link to="/cart" className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {cartCount}
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleSearch} className="text-white p-2 focus:outline-none">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleSearch} className="text-white p-2 focus:outline-none">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center md:hidden`}
        >
          <li>
            <Link to="/" className="block py-2 hover:underline hover:text-indigo-200 transition duration-200" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/products" className="block py-2 hover:underline hover:text-indigo-200 transition duration-200" onClick={toggleMenu}>Products</Link>
          </li>
          <li>
            <Link to="/admin" className="block py-2 hover:underline hover:text-indigo-200 transition duration-200" onClick={toggleMenu}>Admin</Link>
          </li>
          <li>
            <Link to="/history" className="block py-2 hover:underline hover:text-indigo-200 transition duration-200 flex items-center justify-center" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHistory} className="mr-2" />
              History
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block py-2 hover:underline hover:text-indigo-200 transition duration-200 relative" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {isSearchOpen && (
        <form className="flex mt-4 md:mt-0 md:ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 p-2 rounded-r-md hover:bg-gray-100 transition duration-200"
          >
            Search
          </button>
        </form>
      )}
    </header>
  );
}

export default Header;
