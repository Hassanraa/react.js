import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Admin from './components/Admin';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto mt-10">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/history" element={<OrderHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
